/**
 * Internal, non-normative target-reference diagnostic harness.
 *
 * This module classifies an in-memory draft reference without mutating the
 * reference or its resolution context. It is intentionally not a Dataset
 * parser and does not define an E2R payload.
 */

const STATES = new Set(["malformed", "unknown", "missing", "resolved", "ambiguous"]);

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function malformed(reason) {
  return { state: "malformed", reason };
}

function unknown(reason) {
  return { state: "unknown", reason };
}

function matchesFor(reference, context) {
  const namespace = context?.namespaces?.[reference.ownerNamespace];
  if (!namespace) return null;
  if (!Array.isArray(namespace.targetKinds) || !namespace.targetKinds.includes(reference.targetKind)) {
    return null;
  }

  if (reference.targetKind === "dataset") {
    return context.datasetTargetSupported ? ["dataset"] : null;
  }

  if (reference.targetKind === "field-slot") {
    if (!reference.fieldKey) {
      return null;
    }
    const ownerTargets = Array.isArray(namespace.targets) ? namespace.targets : [];
    const ownerMatches = ownerTargets.filter((target) => target.id === reference.localId);
    if (ownerMatches.length === 0) return [];
    if (!ownerMatches.every((target) => Array.isArray(target.fieldKeys) && target.fieldKeys.includes(reference.fieldKey))) {
      return null;
    }
    return ownerMatches;
  }

  const targets = Array.isArray(namespace.targets) ? namespace.targets : [];
  return targets.filter((target) => (
    target.kind === reference.targetKind
    && target.id === reference.localId
  ));
}

/**
 * @param {unknown} reference
 * @param {object} context
 * @returns {{state: string, reason: string, targetCount?: number}}
 */
export function classifyTargetReference(reference, context) {
  if (!isRecord(reference) || reference.scope !== "dataset-local") {
    return malformed("dataset-local scope is required");
  }
  if (typeof reference.ownerNamespace !== "string" || reference.ownerNamespace.length === 0) {
    return malformed("owner namespace is required");
  }
  if (typeof reference.targetKind !== "string" || reference.targetKind.length === 0) {
    return malformed("target kind is required");
  }
  if (reference.targetKind !== "dataset" && (typeof reference.localId !== "string" || reference.localId.length === 0)) {
    return malformed("local identity is required for non-Dataset targets");
  }
  if (reference.targetKind === "field-slot" && (typeof reference.fieldKey !== "string" || reference.fieldKey.length === 0)) {
    return malformed("field identity is required for a field-slot target");
  }

  const namespace = context?.namespaces?.[reference.ownerNamespace];
  if (!namespace) return unknown("owner namespace is unsupported");

  const matches = matchesFor(reference, context);
  if (matches === null) return unknown("target kind or profile capability is unsupported");
  if (matches.length === 0) return { state: "missing", reason: "known target identity is absent" };
  if (matches.length > 1) {
    return { state: "ambiguous", reason: "more than one target matches", targetCount: matches.length };
  }

  return { state: "resolved", reason: "exactly one target matches" };
}

/**
 * Classify the safe generic response to an owner-specific lifecycle
 * operation. This deliberately does not interpret replacement, merge, or
 * split metadata and never rewrites a reference.
 *
 * @param {unknown} operation
 * @returns {{operation: string, genericAction: string, reason: string}}
 */
export function assessLifecycleOperation(operation) {
  if (!isRecord(operation) || typeof operation.type !== "string") {
    return {
      operation: "malformed",
      genericAction: "preserve-and-report",
      reason: "lifecycle operation type is required",
    };
  }

  switch (operation.type) {
    case "delete":
      if (operation.ownerSpecificRule === true) {
        return {
          operation: "delete",
          genericAction: "defer-to-owner",
          reason: "an explicit owner rule requires owner-specific interpretation",
        };
      }
      return {
        operation: "delete",
        genericAction: "preserve-and-report",
        reason: "deletion does not authorize cascade deletion or retargeting",
      };
    case "replace":
      if (operation.ownerSpecificRule === true) {
        return {
          operation: "replace",
          genericAction: "defer-to-owner",
          reason: "an explicit owner rule requires owner-specific interpretation",
        };
      }
      return {
        operation: "replace",
        genericAction: "preserve-old-reference",
        reason: "replacement does not authorize automatic redirect",
      };
    case "merge":
      if (operation.ownerSpecificRule === true) {
        return {
          operation: "merge",
          genericAction: "defer-to-owner",
          reason: "an explicit owner rule requires owner-specific interpretation",
        };
      }
      return {
        operation: "merge",
        genericAction: "preserve-source-records",
        reason: "merge does not authorize automatic record propagation",
      };
    case "split":
      if (operation.ownerSpecificRule === true) {
        return {
          operation: "split",
          genericAction: "defer-to-owner",
          reason: "an explicit owner rule requires owner-specific interpretation",
        };
      }
      return {
        operation: "split",
        genericAction: "preserve-source-reference",
        reason: "split does not authorize automatic target selection",
      };
    case "id-reuse":
      if (operation.survivingPersistentReference !== true) {
        return {
          operation: "id-reuse",
          genericAction: "preserve-and-report",
          reason: "identity reuse requires evidence of a surviving persistent reference",
        };
      }
      return {
        operation: "id-reuse",
        genericAction: "reject-reuse",
        reason: "persistent identities must not silently retarget",
      };
    default:
      return {
        operation: "unknown",
        genericAction: "preserve-and-report",
        reason: "lifecycle operation is not understood",
      };
  }
}

export { STATES };
