import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const specRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const liaisonRoot = process.env.E2R_LIAISONSCAPE_ROOT
  ? resolve(process.env.E2R_LIAISONSCAPE_ROOT)
  : resolve(specRoot, "..", "e2r-liaison-scape");
const pairs = [
  ["en", join(specRoot, "examples", "lighthouse-restoration-demo.en.e2r.json"), join(liaisonRoot, "public", "lighthouse-restoration-demo.en.e2r.json")],
  ["ja", join(specRoot, "examples", "lighthouse-restoration-demo.ja.e2r.json"), join(liaisonRoot, "public", "lighthouse-restoration-demo.ja.e2r.json")],
];

const read = async (path) => {
  try {
    return await readFile(path);
  } catch (error) {
    throw new Error(`cannot read ${path}: ${error.message}`);
  }
};
const parsed = (bytes, path) => {
  try { return JSON.parse(bytes); } catch (error) { throw new Error(`invalid JSON ${path}: ${error.message}`); }
};
const projection = (dataset) => ({
  version: dataset.version,
  entities: dataset.entities.map(({ id, extensions }) => ({ id, coordinate: extensions?.["draft.github.sukoyaka-dopeness.coordinate"] ?? null })),
  events: dataset.events.map(({ id, extensions }) => ({ id, history: extensions?.history ?? null })),
  relations: dataset.relations.map(({ id, sourceId, targetId }) => ({ id, sourceId, targetId })),
  presentation: dataset.extensions?.["draft.github.sukoyaka-dopeness.liaisonscape-presentation"] ?? null,
  specification: dataset.extensions?.["draft.github.sukoyaka-dopeness.specification"]?.uses ?? null,
});
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");

let failed = false;
const datasets = [];
for (const [locale, canonicalPath, mirrorPath] of pairs) {
  try {
    const canonical = await read(canonicalPath);
    const mirror = await read(mirrorPath);
    if (!canonical.equals(mirror)) throw new Error(`byte mismatch: ${canonicalPath} != ${mirrorPath}`);
    const canonicalDataset = parsed(canonical, canonicalPath);
    const mirrorDataset = parsed(mirror, mirrorPath);
    if (JSON.stringify(projection(canonicalDataset)) !== JSON.stringify(projection(mirrorDataset))) {
      throw new Error(`structural mismatch: ${canonicalPath} != ${mirrorPath}`);
    }
    datasets.push([locale, canonicalDataset]);
    console.log(`PASS ${locale} mirror and SHA-256 ${hash(canonical)}`);
  } catch (error) {
    failed = true;
    console.error(`FAIL ${locale}: ${error.message}`);
  }
}
if (datasets.length === 2 && JSON.stringify(projection(datasets[0][1])) !== JSON.stringify(projection(datasets[1][1]))) {
  failed = true;
  console.error("FAIL EN/JA structural parity: localized fields may differ, structural fields do not");
} else if (datasets.length === 2) {
  console.log("PASS EN/JA structural parity");
}
process.exitCode = failed ? 1 : 0;
