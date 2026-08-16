import assert from "node:assert/strict";
import test from "node:test";
import {
  assessLifecycleOperation,
  classifyTargetReference,
  STATES,
} from "./target-reference-diagnostic-harness.mjs";

const context = {
  datasetTargetSupported: true,
  namespaces: {
    core: {
      targetKinds: ["entity", "event", "field-slot"],
      targets: [
        { kind: "entity", id: "entity-alice", fieldKeys: ["name"] },
        { kind: "entity", id: "entity-bob", fieldKeys: ["name"] },
        { kind: "event", id: "event-landing", fieldKeys: ["name"] },
      ],
    },
    dataset: {
      targetKinds: ["dataset"],
      targets: [],
    },
    "research.fixture.names": {
      targetKinds: ["record", "field-slot"],
      targets: [{ kind: "record", id: "name-1", fieldKeys: ["label"] }],
    },
  },
};

function reference(overrides = {}) {
  return {
    scope: "dataset-local",
    ownerNamespace: "core",
    targetKind: "entity",
    localId: "entity-alice",
    ...overrides,
  };
}

test("exposes the five research diagnostic states", () => {
  assert.deepEqual([...STATES], ["malformed", "unknown", "missing", "resolved", "ambiguous"]);
});

test("classifies malformed references without guessing", () => {
  assert.equal(classifyTargetReference({ scope: "dataset-local" }, context).state, "malformed");
  assert.equal(classifyTargetReference(reference({ scope: "json-pointer" }), context).state, "malformed");
});

test("distinguishes unknown namespace from missing identity", () => {
  assert.equal(
    classifyTargetReference(reference({ ownerNamespace: "future.example.records" }), context).state,
    "unknown",
  );
  assert.equal(
    classifyTargetReference(reference({ localId: "entity-deleted" }), context).state,
    "missing",
  );
});

test("resolves one Core Object and does not create a synthetic target", () => {
  const draft = reference();
  const before = structuredClone(draft);
  assert.equal(classifyTargetReference(draft, context).state, "resolved");
  assert.deepEqual(draft, before);
});

test("classifies multiple matching records as ambiguous", () => {
  const ambiguousContext = structuredClone(context);
  ambiguousContext.namespaces["research.fixture.names"].targets.push({ kind: "record", id: "name-1" });
  assert.equal(
    classifyTargetReference(reference({
      ownerNamespace: "research.fixture.names",
      targetKind: "record",
      localId: "name-1",
    }), ambiguousContext).state,
    "ambiguous",
  );
});

test("keeps slot resolution independent from current values and companions", () => {
  const slotReference = reference({ targetKind: "field-slot", fieldKey: "name" });
  const valueCompanion = { ownerReference: structuredClone(slotReference), value: "Alice" };
  const aliceContext = { ...structuredClone(context), currentFieldValues: { "entity-alice/name": "Alice" } };
  const bobContext = { ...structuredClone(context), currentFieldValues: { "entity-alice/name": "Bob" } };
  const emptyContext = { ...structuredClone(context), currentFieldValues: {} };

  assert.deepEqual(classifyTargetReference(slotReference, aliceContext), {
    state: "resolved",
    reason: "exactly one target matches",
  });
  assert.deepEqual(classifyTargetReference(slotReference, bobContext), {
    state: "resolved",
    reason: "exactly one target matches",
  });
  assert.deepEqual(classifyTargetReference(slotReference, emptyContext), {
    state: "resolved",
    reason: "exactly one target matches",
  });
  assert.deepEqual(valueCompanion, {
    ownerReference: slotReference,
    value: "Alice",
  });
});

test("does not restrict field slots to Entity targets", () => {
  assert.equal(
    classifyTargetReference(reference({
      targetKind: "field-slot",
      localId: "event-landing",
      fieldKey: "name",
    }), context).state,
    "resolved",
  );
});

test("resolves a field slot owned by an Extension record", () => {
  assert.deepEqual(
    classifyTargetReference(reference({
      ownerNamespace: "research.fixture.names",
      targetKind: "field-slot",
      localId: "name-1",
      fieldKey: "label",
    }), context),
    {
      state: "resolved",
      reason: "exactly one target matches",
    },
  );
});

test("classifies an unsupported field identity as unknown", () => {
  assert.equal(
    classifyTargetReference(reference({ targetKind: "field-slot", fieldKey: "unknownField" }), context).state,
    "unknown",
  );
});

test("classifies Dataset targets by explicit profile capability", () => {
  const datasetReference = reference({ ownerNamespace: "dataset", targetKind: "dataset" });
  assert.equal(classifyTargetReference(datasetReference, context).state, "resolved");
  assert.equal(
    classifyTargetReference(datasetReference, { ...context, datasetTargetSupported: false }).state,
    "unknown",
  );
});

test("keeps deletion as a preserved missing reference", () => {
  assert.deepEqual(assessLifecycleOperation({ type: "delete" }), {
    operation: "delete",
    genericAction: "preserve-and-report",
    reason: "deletion does not authorize cascade deletion or retargeting",
  });
});

test("does not derive a resolver state from a delete operation", () => {
  const retainedContext = structuredClone(context);
  const target = reference();
  assert.equal(classifyTargetReference(target, retainedContext).state, "resolved");
  assert.equal(assessLifecycleOperation({ type: "delete" }).operation, "delete");
  assert.equal(classifyTargetReference(target, retainedContext).state, "resolved");
});

test("does not automatically redirect, propagate, or select lifecycle targets", () => {
  assert.equal(assessLifecycleOperation({ type: "replace" }).genericAction, "preserve-old-reference");
  assert.equal(assessLifecycleOperation({ type: "merge" }).genericAction, "preserve-source-records");
  assert.equal(assessLifecycleOperation({ type: "split" }).genericAction, "preserve-source-reference");
  assert.equal(
    assessLifecycleOperation({ type: "replace", ownerSpecificRule: true }).genericAction,
    "defer-to-owner",
  );
});

test("rejects persistent identity reuse as an integrity risk", () => {
  assert.equal(
    assessLifecycleOperation({ type: "id-reuse" }).genericAction,
    "preserve-and-report",
  );
  assert.deepEqual(assessLifecycleOperation({ type: "id-reuse" }), {
    operation: "id-reuse",
    genericAction: "preserve-and-report",
    reason: "identity reuse requires evidence of a surviving persistent reference",
  });
  assert.deepEqual(assessLifecycleOperation({ type: "id-reuse", survivingPersistentReference: true }), {
    operation: "id-reuse",
    genericAction: "reject-reuse",
    reason: "persistent identities must not silently retarget",
  });
});
