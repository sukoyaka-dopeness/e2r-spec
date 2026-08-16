/**
 * Internal, non-normative Name identity workflow evidence harness.
 */

const POLICIES = new Set(["P1-expression", "P2-binding", "P3-hybrid"]);
const WORKFLOWS = new Set(["historical-timeline-naming", "multilingual-display-search"]);

/** @param {string} policy @param {string} workflow */
export function assessNameWorkflow(policy, workflow) {
  if (!POLICIES.has(policy) || !WORKFLOWS.has(workflow)) {
    return { status: "malformed", preservation: "preserve-and-report" };
  }
  if (workflow === "historical-timeline-naming") {
    if (policy === "P1-expression") return { status: "strongest-current-fit", preservation: "preserve-old-expression" };
    if (policy === "P2-binding") return { status: "conditional-on-version-or-snapshot", preservation: "preserve-and-report" };
    return { status: "strong-but-larger", preservation: "preserve-old-expression" };
  }
  if (policy === "P1-expression") return { status: "strong-preservation-needs-grouping", preservation: "preserve-variants" };
  if (policy === "P2-binding") return { status: "strong-grouping-conditional-history", preservation: "preserve-variants" };
  return { status: "broadest-feature-coverage-highest-complexity", preservation: "preserve-variants" };
}

export { POLICIES, WORKFLOWS };
