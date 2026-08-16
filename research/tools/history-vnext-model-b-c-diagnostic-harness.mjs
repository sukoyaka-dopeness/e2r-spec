/**
 * Internal, non-normative Model B/C cross-profile diagnostic harness.
 *
 * This module evaluates research fixture cases for reader capability
 * boundaries. It does not parse E2R Datasets, define an applicability payload,
 * or validate a final Extension.
 */

const PROFILES = new Set([
  "profile-b-full",
  "profile-b-names-only",
  "profile-c-applicability-only",
]);

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function outcome(interpretation, preservation, note) {
  return { interpretation, preservation, note };
}

/**
 * @param {string} profileId
 * @param {object} fixtureCase
 * @returns {{interpretation: string, preservation: string, note: string}}
 */
export function assessModelBCase(profileId, fixtureCase) {
  if (!PROFILES.has(profileId) || !isRecord(fixtureCase) || typeof fixtureCase.id !== "string") {
    return outcome("malformed", "preserve-and-report", "profile and fixture case are required");
  }

  if (fixtureCase.id === "used-versus-valid") {
    if (profileId === "profile-b-full") {
      return outcome("interpret-name-preserve-rule", "preserve", "Names owns used-during; Rule meaning is separate");
    }
    if (profileId === "profile-b-names-only") {
      return outcome("interpret-name-preserve-unsupported-rule", "preserve", "temporal capability is unavailable");
    }
    return outcome("no-shared-contract", "preserve", "shape alone does not establish generic applicability semantics");
  }

  if (fixtureCase.id === "alice-to-bob-substantive-edit") {
    return outcome("historical-value-unresolved", "preserve-and-report", "record identity does not prove historical expression value");
  }

  if (fixtureCase.id === "independent-unknown-and-missing") {
    return outcome("independent-reference-diagnostics", "preserve", "unknown and missing remain distinct");
  }

  if (fixtureCase.id === "later-claim-evidence") {
    return outcome("explicit-enrichment-only", "preserve", "Claim and Evidence do not reinterpret ordinary applicability");
  }

  if (fixtureCase.id === "one-name-one-interval" || fixtureCase.id === "successive-names" || fixtureCase.id === "overlapping-names") {
    if (profileId === "profile-b-full") {
      return outcome("interpret-name-with-temporal-capability", "preserve", "Names owns domain meaning; temporal capability supplies representation");
    }
    if (profileId === "profile-b-names-only") {
      return outcome("interpret-name-preserve-unsupported-temporal", "preserve", "Name meaning remains understood without invented interval interpretation");
    }
    return outcome("preserve-unknown-name-domain", "preserve", "applicability-only profile does not understand Names semantics");
  }

  return outcome("unknown-fixture-case", "preserve-and-report", "fixture case is not covered by this research harness");
}

export { PROFILES };
