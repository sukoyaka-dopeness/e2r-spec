import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = join(scriptDirectory, "..");
const schema = JSON.parse(readFileSync(join(repositoryRoot, "schemas/extensions/perspective-candidate.schema.json"), "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(schema);
let failures = 0;

function check(label, payload, expected) {
  const valid = validate(payload);
  if (valid !== expected) {
    failures += 1;
    console.error(`FAIL ${label}: expected ${expected ? "valid" : "invalid"}; ${ajv.errorsText(validate.errors)}`);
  } else {
    console.log(`PASS ${expected ? "valid" : "invalid"} ${label}`);
  }
}

check("sparse ordered Event IDs", {
  perspectives: { main: { name: "Timeline", eventOrder: ["event-a", "event-undated", "event-b"] } },
}, true);
check("multiple Perspective entries and empty sequence", {
  perspectives: {
    main: { name: "Main", eventOrder: [] },
    alternate: { name: "Alternate", eventOrder: ["event-b", "event-a"] },
  },
}, true);
check("duplicate Event ID", {
  perspectives: { main: { name: "Main", eventOrder: ["event-a", "event-a"] } },
}, false);
check("non-string Event ID", {
  perspectives: { main: { name: "Main", eventOrder: [42] } },
}, false);
check("missing Perspective name", {
  perspectives: { main: { eventOrder: [] } },
}, false);
check("empty Perspective map", { perspectives: {} }, false);

if (failures > 0) {
  console.error(`Perspective candidate schema validation failed with ${failures} error(s).`);
  process.exitCode = 1;
} else {
  console.log("Perspective candidate payload shape checks passed; Dataset references and semantics are not validated.");
}
