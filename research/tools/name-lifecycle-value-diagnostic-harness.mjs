/**
 * Internal, non-normative Name lifecycle/value diagnostic harness.
 */

const MODELS = new Set([
  "L1-immutable-expression-identity",
  "L2-mutable-with-explicit-snapshot",
]);

function result(interpretation, preservation, note) {
  return { interpretation, preservation, note };
}

/** @param {string} model @param {object} fixtureCase */
export function assessNameLifecycleCase(model, fixtureCase) {
  if (!MODELS.has(model) || !fixtureCase || typeof fixtureCase.id !== "string") {
    return result("malformed", "preserve-and-report", "model and fixture case are required");
  }
  switch (fixtureCase.id) {
    case "cosmetic-metadata-edit":
      return result("identity-preserved", "preserve", "represented expression is unchanged");
    case "alice-to-bob-substantive-replacement":
      return model === "L1-immutable-expression-identity"
        ? result("new-identity-for-bob", "preserve-old-reference", "Alice remains the old Name identity")
        : result("historical-value-unresolved-without-snapshot", "preserve-and-report", "current identity does not preserve Alice");
    case "language-or-script-change":
      return result("explicit-identity-policy-required", "preserve-and-report", "language and script identity is unresolved");
    case "old-and-new-applicability":
      return result("independent-old-and-new-identities", "preserve-no-redirect", "replacement does not retarget old applicability");
    case "explicit-l2-value-snapshot":
      return result("current-reference-plus-separate-value-datum", "preserve", "resolver does not rewrite the snapshot");
    case "unknown-missing-retired-replaced":
      return result("independent-lifecycle-and-resolution", "preserve", "unknown, missing, retired, and replacement remain distinct");
    case "later-claim-evidence":
      return result("explicit-enrichment-only", "preserve", "Claim and Evidence do not become lifecycle rules");
    default:
      return result("unknown-fixture-case", "preserve-and-report", "fixture case is not covered");
  }
}

export { MODELS };
