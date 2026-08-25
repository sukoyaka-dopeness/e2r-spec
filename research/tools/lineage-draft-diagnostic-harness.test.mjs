import assert from "node:assert/strict";
import test from "node:test";
import { diagnoseLineageDraft, LINEAGE_ID } from "./lineage-draft-diagnostic-harness.mjs";

function dataset(lineage, metadata = { datasetId: "child-dataset" }) {
  return {
    version: "1.0",
    entities: [],
    events: [],
    relations: [],
    extensions: { metadata, [LINEAGE_ID]: lineage },
  };
}

const parent = (kind = "fork", datasetId = "parent-dataset") => ({ kind, target: { datasetId } });
const validPayload = { specVersion: "0.1.0", parents: [parent()] };

test("accepts the four kinds, unknown fields, and an unresolved parent", () => {
  for (const kind of ["derived", "revision", "fork", "translation"]) {
    const result = diagnoseLineageDraft(dataset({
      ...validPayload,
      parents: [parent(kind, "not-present-locally")],
      futureSentinel: { token: "preserve-me" },
    }));
    assert.deepEqual(result, { valid: true, diagnostics: [] });
  }
});

test("allows multiple parents and the same target under different kinds", () => {
  const result = diagnoseLineageDraft(dataset({
    ...validPayload,
    parents: [parent("derived", "a"), parent("derived", "b"), parent("revision", "a")],
  }));
  assert.equal(result.valid, true);
  assert.deepEqual(result.diagnostics, []);
});

test("reports version, Metadata, and structural failures in deterministic order", () => {
  const result = diagnoseLineageDraft(dataset({ specVersion: "0.2.0", parents: "wrong" }, null));
  assert.deepEqual(result.diagnostics, [
    { severity: "error", code: "lineage_spec_version_unsupported", path: `/extensions/${LINEAGE_ID}/specVersion` },
    { severity: "error", code: "lineage_metadata_dataset_id_missing", path: "/extensions/metadata/datasetId" },
    { severity: "error", code: "lineage_parents_invalid", path: `/extensions/${LINEAGE_ID}/parents` },
  ]);
});

test("reports self-reference and only the second identical parent as duplicate", () => {
  const result = diagnoseLineageDraft(dataset({
    ...validPayload,
    parents: [parent("fork", "child-dataset"), parent(), parent()],
  }));
  assert.deepEqual(result.diagnostics, [
    { severity: "error", code: "lineage_self_reference", path: `/extensions/${LINEAGE_ID}/parents/0/target/datasetId` },
    { severity: "error", code: "lineage_duplicate_parent", path: `/extensions/${LINEAGE_ID}/parents/2` },
  ]);
});

test("reports invalid kind and empty parents without fallback or mutation", () => {
  const source = dataset({ specVersion: "0.1.0", parents: [parent("merge")] });
  const before = structuredClone(source);
  const result = diagnoseLineageDraft(source);
  assert.equal(result.diagnostics[0]?.code, "lineage_kind_invalid");
  assert.deepEqual(diagnoseLineageDraft(dataset({ specVersion: "0.1.0", parents: [] })).diagnostics, [
    { severity: "error", code: "lineage_parents_empty", path: `/extensions/${LINEAGE_ID}/parents` },
  ]);
  assert.deepEqual(source, before);
});

test("does not diagnose an absent Lineage Extension", () => {
  assert.deepEqual(diagnoseLineageDraft({ version: "1.0", entities: [], events: [], relations: [] }), {
    valid: true,
    diagnostics: [],
  });
});
