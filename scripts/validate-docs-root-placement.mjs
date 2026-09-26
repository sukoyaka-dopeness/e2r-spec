import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function validateDocsRootPlacement(docsRoot, manifest) {
  const errors = [];
  let actualPaths;

  try {
    actualPaths = fs.readdirSync(docsRoot, { withFileTypes: true })
      .filter((entry) => entry.isFile() && /[.]md$/i.test(entry.name))
      .map((entry) => `docs/${entry.name}`)
      .sort();
  } catch (error) {
    return {
      actualPaths: [],
      errors: [`Cannot enumerate documentation root: ${error.message}`],
    };
  }

  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    return { actualPaths, errors: ["Allowlist must be a JSON object."] };
  }
  const manifestKeys = Object.keys(manifest).sort();
  if (manifestKeys.join(",") !== "entries,version") {
    errors.push("Allowlist must contain exactly the keys `version` and `entries`.");
  }
  if (manifest.version !== 1) {
    errors.push("Allowlist `version` must be the integer 1.");
  }
  if (!Array.isArray(manifest.entries)) {
    errors.push("Allowlist `entries` must be an array.");
    return { actualPaths, errors };
  }

  const allowedPaths = [];
  const exactSeen = new Set();
  const foldedSeen = new Set();
  for (const [index, entry] of manifest.entries.entries()) {
    const label = `Allowlist entry ${index + 1}`;
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      errors.push(`${label} must be an object.`);
      continue;
    }
    const entryKeys = Object.keys(entry).sort();
    if (entryKeys.join(",") !== "path,rationale") {
      errors.push(`${label} must contain exactly the keys path and rationale.`);
    }
    if (typeof entry.path !== "string" || !/^docs\/[^/\\]+[.]md$/i.test(entry.path)) {
      errors.push(`${label} has a malformed immediate-root Markdown path.`);
      continue;
    }
    if (typeof entry.rationale !== "string" || !entry.rationale.trim()) {
      errors.push(`${label} must have a non-empty positive placement rationale.`);
    }
    const foldedPath = entry.path.toLocaleLowerCase("en-US");
    if (exactSeen.has(entry.path) || foldedSeen.has(foldedPath)) {
      errors.push(`${label} duplicates path ${entry.path}.`);
    }
    exactSeen.add(entry.path);
    foldedSeen.add(foldedPath);
    allowedPaths.push(entry.path);
  }

  const actualSet = new Set(actualPaths);
  const allowedSet = new Set(allowedPaths);
  const unapproved = actualPaths.filter((item) => !allowedSet.has(item));
  const stale = [...allowedSet].filter((item) => !actualSet.has(item)).sort();
  if (unapproved.length) {
    errors.push(`Unapproved root Markdown path(s): ${unapproved.join(", ")}`);
  }
  if (stale.length) {
    errors.push(`Stale allowlist path(s): ${stale.join(", ")}`);
  }

  return { actualPaths, errors };
}

function run() {
  const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const docsRoot = path.join(repositoryRoot, "docs");
  const manifestPath = path.join(docsRoot, "documentation-ia", "root-placement-allowlist.json");
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (error) {
    console.error(`Cannot read/parse root-placement allowlist: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const result = validateDocsRootPlacement(docsRoot, manifest);
  if (result.errors.length) {
    console.error("Documentation root placement validation failed:");
    for (const error of result.errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Documentation root placement validated: ${result.actualPaths.length} reviewed path(s).`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  run();
}
