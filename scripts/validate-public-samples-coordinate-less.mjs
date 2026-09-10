import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const coordinateExtension = "draft.github.sukoyaka-dopeness.coordinate";
const files = [
  "examples/apollo-11-mission.en.e2r.json",
  "examples/apollo-11-mission.ja.e2r.json",
  "examples/ashen-crown.en.e2r.json",
  "examples/ashen-crown.ja.e2r.json",
  "examples/lighthouse-restoration-demo.en.e2r.json",
  "examples/lighthouse-restoration-demo.ja.e2r.json",
  "examples/titanic-final-voyage.en.e2r.json",
  "examples/titanic-final-voyage.ja.e2r.json",
];

for (const file of files) {
  const dataset = JSON.parse(await readFile(file, "utf8"));
  assert.equal(dataset.extensions?.[coordinateExtension], undefined, `${file} retains Dataset Coordinate data`);
  for (const entity of dataset.entities ?? []) {
    assert.equal(entity.extensions?.[coordinateExtension], undefined, `${file} retains Coordinate data for ${entity.id}`);
  }
  for (const event of dataset.events ?? []) {
    assert.equal(event.extensions?.[coordinateExtension], undefined, `${file} retains Coordinate data for ${event.id}`);
  }
  console.log(`PASS ${file} is coordinate-less`);
}

console.log(`Public sample coordinate-less validation passed: ${files.length} canonical file(s).`);
