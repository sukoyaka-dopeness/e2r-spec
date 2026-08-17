import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const files = ["examples/apollo-11-mission.en.e2r.json", "examples/apollo-11-mission.ja.e2r.json"];
const datasets = await Promise.all(files.map(async (file) => JSON.parse(await readFile(file, "utf8"))));
const [en, ja] = datasets;
for (const dataset of datasets) {
  assert.equal(dataset.entities.length, 9);
  assert.equal(dataset.events.length, 12);
  assert.equal(dataset.relations.length, 66);
  const ids = new Set([...dataset.entities, ...dataset.events].map(({ id }) => id));
  for (const relation of dataset.relations) {
    assert.ok(ids.has(relation.sourceId));
    assert.ok(ids.has(relation.targetId));
  }
  for (const event of dataset.events) {
    const time = event.extensions.history.time;
    assert.equal(time.timeZone, "Etc/UTC");
    assert.equal(time.offset, "+00:00");
  }
}
const relatedTargets = (dataset, eventId) => dataset.relations.filter(({ sourceId }) => sourceId === eventId).map(({ targetId }) => targetId);
assert.deepEqual(relatedTargets(en, "landing").sort(), ["armstrong", "aldrin", "eagle", "moon"].sort());
assert.deepEqual(relatedTargets(en, "eva").sort(), ["armstrong", "aldrin", "eagle", "moon"].sort());
assert.ok(!relatedTargets(en, "landing").includes("collins"));
assert.ok(relatedTargets(en, "splashdown").includes("columbia"));
assert.deepEqual(relatedTargets(en, "recovery").sort(), ["hornet", "columbia", "armstrong", "aldrin", "collins"].sort());
assert.deepEqual(en.relations.find(({ id }) => id === "entity-10"), { id: "entity-10", name: "launches", sourceId: "saturn-v", targetId: "columbia" });
assert.equal(ja.relations.find(({ id }) => id === "entity-10")?.sourceId, "saturn-v");
assert.equal(ja.relations.find(({ id }) => id === "entity-10")?.targetId, "columbia");
const shape = (dataset) => ({
  entities: dataset.entities.map(({ id, extensions }) => [id, extensions["draft.github.sukoyaka-dopeness.coordinate"]]),
  events: dataset.events.map(({ id, extensions }) => [id, extensions.history]),
  relations: dataset.relations.map(({ id, sourceId, targetId }) => [id, sourceId, targetId]),
});
assert.deepEqual(shape(en), shape(ja));
assert.notEqual(en.extensions.metadata.datasetId, ja.extensions.metadata.datasetId);
console.log("Apollo 11 canonical sample validation passed: EN/JA structure, endpoints, History, and Coordinate parity.");
