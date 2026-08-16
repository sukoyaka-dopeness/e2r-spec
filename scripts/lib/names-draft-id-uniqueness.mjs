const NAMES_DRAFT_ID = "draft.github.sukoyaka-dopeness.names";

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isRecognizedExpression(candidate) {
  return isObject(candidate)
    && typeof candidate.id === "string"
    && typeof candidate.value === "string";
}

/**
 * Checks the Names Draft 0.1.0 Dataset-wide recognized-ID uniqueness rule.
 *
 * The Dataset is expected to have passed Core parsing and validation. Local
 * Names conformance is intentionally not a precondition: every object member
 * with string `id` and `value` fields participates, including a recognized
 * candidate with other locally invalid fields.
 */
export function hasDuplicateRecognizedNamesDraftIds(dataset) {
  const occurrencesById = new Map();
  let hasDuplicate = false;

  for (const collectionName of ["entities", "events", "relations"]) {
    for (const object of dataset[collectionName]) {
      const payload = object.extensions?.[NAMES_DRAFT_ID];
      if (!isObject(payload) || !Array.isArray(payload.expressions)) continue;

      for (const expression of payload.expressions) {
        if (!isRecognizedExpression(expression)) continue;

        const occurrenceCount = occurrencesById.get(expression.id) ?? 0;
        if (occurrenceCount > 0) hasDuplicate = true;
        occurrencesById.set(expression.id, occurrenceCount + 1);
      }
    }
  }

  return hasDuplicate;
}
