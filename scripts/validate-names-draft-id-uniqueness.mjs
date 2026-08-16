import assert from "node:assert/strict";

import { hasDuplicateRecognizedNamesDraftIds } from "./lib/names-draft-id-uniqueness.mjs";

const NAMES_DRAFT_ID = "draft.github.sukoyaka-dopeness.names";

function expressionObject(objectId, expressions, extraExtensions = {}) {
  return {
    id: objectId,
    extensions: {
      ...extraExtensions,
      [NAMES_DRAFT_ID]: { expressions },
    },
  };
}

function dataset({ entities = [], events = [], relations = [] } = {}) {
  return { version: "1.0", entities, events, relations };
}

const duplicateCases = [
  [
    "same object",
    dataset({
      entities: [expressionObject("E1", [
        { id: "N1", value: "Tokyo" },
        { id: "N1", value: "東京" },
      ])],
    }),
  ],
  [
    "different entities",
    dataset({
      entities: [
        expressionObject("E1", [{ id: "N1", value: "Tokyo" }]),
        expressionObject("E2", [{ id: "N1", value: "Kyoto" }]),
      ],
    }),
  ],
  [
    "different events",
    dataset({
      events: [
        expressionObject("V1", [{ id: "N1", value: "Arrival" }]),
        expressionObject("V2", [{ id: "N1", value: "Departure" }]),
      ],
    }),
  ],
  [
    "different relations",
    dataset({
      relations: [
        expressionObject("R1", [{ id: "N1", value: "Parent" }]),
        expressionObject("R2", [{ id: "N1", value: "Child" }]),
      ],
    }),
  ],
  [
    "entity and event",
    dataset({
      entities: [expressionObject("E1", [{ id: "N1", value: "Tokyo" }])],
      events: [expressionObject("V1", [{ id: "N1", value: "Arrival" }])],
    }),
  ],
  [
    "entity and relation",
    dataset({
      entities: [expressionObject("E1", [{ id: "N1", value: "Tokyo" }])],
      relations: [expressionObject("R1", [{ id: "N1", value: "Located in" }])],
    }),
  ],
  [
    "event and relation",
    dataset({
      events: [expressionObject("V1", [{ id: "N1", value: "Arrival" }])],
      relations: [expressionObject("R1", [{ id: "N1", value: "Occurred at" }])],
    }),
  ],
  [
    "empty id candidates",
    dataset({
      entities: [expressionObject("E1", [
        { id: "", value: "Tokyo" },
        { id: "", value: "Kyoto" },
      ])],
    }),
  ],
  [
    "empty value candidate",
    dataset({
      entities: [expressionObject("E1", [{ id: "N1", value: "" }])],
      events: [expressionObject("V1", [{ id: "N1", value: "Arrival" }])],
    }),
  ],
  [
    "invalid language candidate",
    dataset({
      entities: [expressionObject("E1", [{ id: "N1", value: "Tokyo", language: 123 }])],
      events: [expressionObject("V1", [{ id: "N1", value: "Arrival" }])],
    }),
  ],
  [
    "invalid script candidate",
    dataset({
      entities: [expressionObject("E1", [{ id: "N1", value: "Tokyo", script: null }])],
      relations: [expressionObject("R1", [{ id: "N1", value: "Located in" }])],
    }),
  ],
];

const uniqueCases = [
  ["no Names payloads", dataset({ entities: [{ id: "N1" }] })],
  [
    "unique IDs across all object types",
    dataset({
      entities: [expressionObject("E1", [{ id: "N1", value: "Tokyo" }])],
      events: [expressionObject("V1", [{ id: "N2", value: "Arrival" }])],
      relations: [expressionObject("R1", [{ id: "N3", value: "Occurred at" }])],
    }),
  ],
  [
    "equal values with distinct IDs",
    dataset({
      entities: [expressionObject("E1", [
        { id: "N1", value: "Tokyo" },
        { id: "N2", value: "Tokyo" },
      ])],
    }),
  ],
  [
    "Core Object ID is outside Names scope",
    dataset({
      entities: [expressionObject("N1", [{ id: "N2", value: "Tokyo" }])],
      events: [{ id: "N2" }],
    }),
  ],
  [
    "other Extension ID is outside Names scope",
    dataset({
      entities: [expressionObject(
        "E1",
        [{ id: "N2", value: "Tokyo" }],
        { other: { expressions: [{ id: "N2", value: "Other" }] } },
      )],
    }),
  ],
  [
    "opaque members are excluded",
    dataset({
      entities: [expressionObject("E1", [
        null,
        ["N1"],
        { id: "N1" },
        { id: "N1", value: 123 },
        { id: 123, value: "Tokyo" },
        { id: "N2", value: "Tokyo" },
      ])],
      events: [expressionObject("V1", [{ id: "N1", value: "Arrival" }])],
    }),
  ],
];

for (const [name, source] of duplicateCases) {
  const original = structuredClone(source);
  assert.equal(
    hasDuplicateRecognizedNamesDraftIds(source),
    true,
    `${name} should be detected as duplicate`,
  );
  assert.deepEqual(source, original, `${name} should not be modified`);
}

for (const [name, source] of uniqueCases) {
  const original = structuredClone(source);
  assert.equal(
    hasDuplicateRecognizedNamesDraftIds(source),
    false,
    `${name} should not be detected as duplicate`,
  );
  assert.deepEqual(source, original, `${name} should not be modified`);
}

console.log(
  `Names Draft Dataset-wide ID uniqueness validation passed: ${duplicateCases.length} duplicate and ${uniqueCases.length} unique cases.`,
);
