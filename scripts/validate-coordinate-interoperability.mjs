import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  readObjectCoordinates,
  updateObjectCoordinate,
} from "../../e2r-narrative-line/src/services/CoordinateService.ts";
import {
  applyStoredCoordinates,
  getStoredCoordinates,
} from "../../e2r-liaison-scape/src/dataset.ts";
import { validateDataset } from "../../e2r-validator/src/index.js";

const coordinateId = "experimental.github.sukoyaka-dopeness.coordinate";
const source = JSON.parse(await readFile(
  new URL("../examples/cross-application-demo.json", import.meta.url),
  "utf8",
));

const originalOtherSpace = structuredClone(
  source.entities[0].extensions[coordinateId].coordinates.find(
    ({ spaceId }) => spaceId === "harbor-site-plan",
  ),
);

const narrativeWrite = updateObjectCoordinate(
  source,
  "entity-lighthouse",
  "liaisonscape-graph",
  { x: 112, y: 156 },
);
assert.equal(narrativeWrite.status, "updated");
assert.equal(validateDataset(narrativeWrite.dataset).valid, true);
assert.deepEqual(
  getStoredCoordinates(narrativeWrite.dataset)["entity-lighthouse"],
  { x: 112, y: 156 },
);

const linkscapeWrite = applyStoredCoordinates(narrativeWrite.dataset, {
  ...getStoredCoordinates(narrativeWrite.dataset),
  "entity-lighthouse": { x: 112, y: 204 },
});
assert.equal(validateDataset(linkscapeWrite).valid, true);

const lighthouse = linkscapeWrite.entities.find(
  ({ id }) => id === "entity-lighthouse",
);
assert.ok(lighthouse);
const narrativeRead = readObjectCoordinates(linkscapeWrite, lighthouse);
assert.equal(narrativeRead.status, "available");
assert.deepEqual(
  narrativeRead.coordinates
    .find(({ spaceId }) => spaceId === "liaisonscape-graph")
    .values.map(({ id, value }) => ({ id, value })),
  [{ id: "x", value: 112 }, { id: "y", value: 204 }],
);
assert.deepEqual(
  lighthouse.extensions[coordinateId].coordinates.find(
    ({ spaceId }) => spaceId === "harbor-site-plan",
  ),
  originalOtherSpace,
);

console.log(
  "Coordinate interoperability passed: NarrativeLine -> Validator -> Linkscape -> Validator -> NarrativeLine",
);
