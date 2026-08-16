/**
 * Internal, non-normative Source/Citation diagnostic harness.
 *
 * This module classifies the two references of one conceptual Citation
 * independently. It does not parse an E2R Dataset, define an aggregate
 * Citation state, or interpret Citation, Evidence, or Provenance semantics.
 */

import { classifyTargetReference } from "./target-reference-diagnostic-harness.mjs";

/**
 * @param {unknown} association
 * @param {object} context
 * @returns {{sourceReference: object, citationTargetReference: object}}
 */
export function classifyCitationReferences(association, context) {
  const sourceReference = association && typeof association === "object"
    ? association.sourceReference
    : undefined;
  const citationTargetReference = association && typeof association === "object"
    ? association.citationTargetReference
    : undefined;

  return {
    sourceReference: classifyTargetReference(sourceReference, context),
    citationTargetReference: classifyTargetReference(citationTargetReference, context),
  };
}
