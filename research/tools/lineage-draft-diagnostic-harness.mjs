/**
 * Internal, non-normative Lineage Draft 0.1.0 diagnostic harness.
 *
 * This models the proposed future Validator seam only. It is intentionally
 * limited to Dataset-level Lineage shape and local semantic checks; it does
 * not resolve parents, validate the Core, or mutate the input.
 */

const LINEAGE_ID = "draft.github.sukoyaka-dopeness.lineage";
const SUPPORTED_VERSION = "0.1.0";
const KINDS = new Set(["derived", "revision", "fork", "translation"]);

const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const nonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

function error(code, path) {
  return { severity: "error", code, path };
}

/**
 * @param {unknown} dataset
 * @returns {{valid: boolean, diagnostics: Array<{severity: string, code: string, path: string}>}}
 */
export function diagnoseLineageDraft(dataset) {
  const diagnostics = [];
  if (!isObject(dataset) || !isObject(dataset.extensions)) return { valid: true, diagnostics };

  const payload = dataset.extensions[LINEAGE_ID];
  if (payload === undefined) return { valid: true, diagnostics };
  const base = `/extensions/${LINEAGE_ID}`;

  if (!isObject(payload)) return { valid: false, diagnostics: [error("lineage_payload_invalid", base)] };

  if (!("specVersion" in payload)) {
    diagnostics.push(error("lineage_spec_version_missing", `${base}/specVersion`));
  } else if (typeof payload.specVersion !== "string") {
    diagnostics.push(error("lineage_spec_version_invalid", `${base}/specVersion`));
  } else if (payload.specVersion !== SUPPORTED_VERSION) {
    diagnostics.push(error("lineage_spec_version_unsupported", `${base}/specVersion`));
  }

  const metadata = dataset.extensions.metadata;
  const childDatasetId = isObject(metadata) && nonEmptyString(metadata.datasetId)
    ? metadata.datasetId
    : undefined;
  if (childDatasetId === undefined) {
    diagnostics.push(error("lineage_metadata_dataset_id_missing", "/extensions/metadata/datasetId"));
  }

  if (!("parents" in payload)) {
    diagnostics.push(error("lineage_parents_missing", `${base}/parents`));
    return { valid: false, diagnostics };
  }
  if (!Array.isArray(payload.parents)) {
    diagnostics.push(error("lineage_parents_invalid", `${base}/parents`));
    return { valid: false, diagnostics };
  }
  if (payload.parents.length === 0) {
    diagnostics.push(error("lineage_parents_empty", `${base}/parents`));
    return { valid: false, diagnostics };
  }

  const seen = new Set();
  for (const [index, parent] of payload.parents.entries()) {
    const parentPath = `${base}/parents/${index}`;
    if (!isObject(parent)) {
      diagnostics.push(error("lineage_parent_invalid", parentPath));
      continue;
    }

    const kindPath = `${parentPath}/kind`;
    const targetPath = `${parentPath}/target`;
    let kindValid = true;
    if (!("kind" in parent)) {
      diagnostics.push(error("lineage_kind_missing", kindPath));
      kindValid = false;
    } else if (typeof parent.kind !== "string" || !KINDS.has(parent.kind)) {
      diagnostics.push(error("lineage_kind_invalid", kindPath));
      kindValid = false;
    }

    if (!isObject(parent.target)) {
      diagnostics.push(error("lineage_target_invalid", targetPath));
      continue;
    }
    const datasetIdPath = `${targetPath}/datasetId`;
    if (!nonEmptyString(parent.target.datasetId)) {
      diagnostics.push(error("lineage_target_dataset_id_invalid", datasetIdPath));
      continue;
    }

    if (childDatasetId !== undefined && parent.target.datasetId === childDatasetId) {
      diagnostics.push(error("lineage_self_reference", datasetIdPath));
    }

    if (kindValid) {
      const key = `${parent.kind}\u0000${parent.target.datasetId}`;
      if (seen.has(key)) diagnostics.push(error("lineage_duplicate_parent", parentPath));
      else seen.add(key);
    }
  }

  return { valid: diagnostics.length === 0, diagnostics };
}

export { LINEAGE_ID, SUPPORTED_VERSION };
