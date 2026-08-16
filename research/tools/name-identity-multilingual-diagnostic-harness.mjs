/**
 * Internal, non-normative multilingual Name identity diagnostic harness.
 */

const POLICIES = new Set(["P1-expression", "P2-binding", "P3-hybrid"]);

function result(interpretation, preservation, note) {
  return { interpretation, preservation, note };
}

/** @param {string} policy @param {object} fixtureCase */
export function assessNameIdentityCase(policy, fixtureCase) {
  if (!POLICIES.has(policy) || !fixtureCase || typeof fixtureCase.id !== "string") {
    return result("malformed", "preserve-and-report", "policy and fixture case are required");
  }
  switch (fixtureCase.id) {
    case "english-japanese":
    case "original-transliteration":
      return result(policy === "P2-binding" ? "group-with-separate-expression-values" : "separate-expression-identities-possible", "preserve", "language and script do not prove equivalence");
    case "short-legal-naming-kind":
      return result(policy === "P2-binding" ? "typed-variant-under-binding" : "distinct-naming-kind-expression", "preserve", "preference does not define identity");
    case "community-context":
      return result("explicit-context-policy-required", "preserve-and-report", "context is distinct from presentation");
    case "historical-alice-alicia":
      return result(policy === "P2-binding" ? "version-or-value-datum-required" : "new-expression-identity-or-variant", "preserve-no-redirect", "historical applicability remains attached to old meaning");
    case "unknown-language-script":
      return result("preserve-unknown-vocabulary", "preserve", "unknown metadata is not a missing Name");
    default:
      return result("unknown-fixture-case", "preserve-and-report", "fixture case is not covered");
  }
}

export { POLICIES };
