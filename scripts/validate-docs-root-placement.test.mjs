import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { validateDocsRootPlacement } from "./validate-docs-root-placement.mjs";

const initialEntries = [
  { path: "docs/README.md", rationale: "Documentation navigation." },
  { path: "docs/roadmap.md", rationale: "Current planning authority." },
];

function withDocsRoot(run) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "e2r-docs-root-"));
  const docsRoot = path.join(tempRoot, "docs");
  fs.mkdirSync(docsRoot);
  try {
    return run(docsRoot);
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

function write(docsRoot, relativePath, content = "content") {
  const filePath = path.join(docsRoot, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function manifest(entries = initialEntries) {
  return { version: 1, entries };
}

test("allows the exact reviewed root set and ignores Markdown below subfolders", () => {
  withDocsRoot((docsRoot) => {
    write(docsRoot, "README.md");
    write(docsRoot, "roadmap.md");
    write(docsRoot, "liaisonscape/result.md");
    const result = validateDocsRootPlacement(docsRoot, manifest());
    assert.deepEqual(result.errors, []);
    assert.deepEqual(result.actualPaths, ["docs/README.md", "docs/roadmap.md"]);
  });
});

test("rejects a newly added immediate-root Markdown document", () => {
  withDocsRoot((docsRoot) => {
    write(docsRoot, "README.md");
    write(docsRoot, "roadmap.md");
    write(docsRoot, "new-document.md");
    const result = validateDocsRootPlacement(docsRoot, manifest());
    assert.match(result.errors.join("\n"), /Unapproved root Markdown path.*docs\/new-document\.md/);
  });
});

test("allows content-only edits to an allowlisted root file", () => {
  withDocsRoot((docsRoot) => {
    write(docsRoot, "README.md", "edited content");
    write(docsRoot, "roadmap.md", "updated planning text");
    assert.deepEqual(validateDocsRootPlacement(docsRoot, manifest()).errors, []);
  });
});

test("a root rename reports both the new unapproved path and stale old path", () => {
  withDocsRoot((docsRoot) => {
    write(docsRoot, "README.md");
    write(docsRoot, "renamed-roadmap.md");
    const result = validateDocsRootPlacement(docsRoot, manifest());
    const errors = result.errors.join("\n");
    assert.match(errors, /Unapproved root Markdown path.*docs\/renamed-roadmap\.md/);
    assert.match(errors, /Stale allowlist path.*docs\/roadmap\.md/);
  });
});

test("a moved root document leaves a stale allowlist entry", () => {
  withDocsRoot((docsRoot) => {
    write(docsRoot, "README.md");
    write(docsRoot, "subfolder/roadmap.md");
    const result = validateDocsRootPlacement(docsRoot, manifest());
    assert.match(result.errors.join("\n"), /Stale allowlist path.*docs\/roadmap\.md/);
  });
});

test("rejects stale, duplicate, and malformed allowlist records", () => {
  withDocsRoot((docsRoot) => {
    write(docsRoot, "README.md");
    const entries = [
      { path: "docs/README.md", rationale: "Navigation." },
      { path: "docs/README.md", rationale: "Duplicate." },
      { path: "docs/missing.md", rationale: "Stale." },
      { path: "docs/nested/file.md", rationale: "Not root-level." },
      { path: "docs/blank.md", rationale: "   " },
    ];
    const result = validateDocsRootPlacement(docsRoot, manifest(entries));
    const errors = result.errors.join("\n");
    assert.match(errors, /duplicates path/);
    assert.match(errors, /Stale allowlist path.*docs\/missing\.md/);
    assert.match(errors, /malformed immediate-root Markdown path/);
    assert.match(errors, /non-empty positive placement rationale/);
  });
});

test("fails closed for malformed manifest shape or version", () => {
  withDocsRoot((docsRoot) => {
    write(docsRoot, "README.md");
    const wrongVersion = validateDocsRootPlacement(docsRoot, { version: 2, entries: [] });
    assert.match(wrongVersion.errors.join("\n"), /version.*integer 1/);
    const malformed = validateDocsRootPlacement(docsRoot, { version: 1, entries: [], unexpected: true });
    assert.match(malformed.errors.join("\n"), /exactly the keys/);
  });
});
