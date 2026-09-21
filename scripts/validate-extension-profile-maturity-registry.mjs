import { readFile } from "node:fs/promises";
import Ajv2020 from "ajv/dist/2020.js";

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const registryPath = "spec/extension-profile-maturity-registry.json";
const schemaPath = "schemas/extension-profile-maturity-registry.schema.json";
const registry = await readJson(registryPath);
const schema = await readJson(schemaPath);
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(schema);

if (!validate(registry)) {
  console.error(ajv.errorsText(validate.errors));
  process.exitCode = 1;
} else {
  const profile = registry.profiles.find((item) => (
    item.extension === "history"
    && item.version === "2.0.0"
    && item.profile === "position-circa"
  ));
  if (!profile || profile.maturity !== "stable") {
    console.error("The adopted history@2.0.0 / position-circa Stable profile is missing.");
    process.exitCode = 1;
  } else {
    console.log("Extension profile maturity registry validation passed: history@2.0.0 / position-circa is Stable.");
  }
}
