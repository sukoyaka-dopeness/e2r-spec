import fixture from '../../examples/research/names/name-expression-p1-consumer-experiment.json' with { type: 'json' };

export function runChecks() {
  return {
    expressionsIndependent: new Set(fixture.expressions.map((expression) => expression.id)).size === 3,
    metadataPreserved: fixture.expressions[0].language === 'ja' && fixture.expressions[1].script === 'Latn',
    nonSubstantiveKeepsIdentity: fixture.nonSubstantiveEdit.intendedExpressionUnchanged === true && fixture.nonSubstantiveEdit.beforeId === fixture.nonSubstantiveEdit.afterId,
    replacementUsesNewIdentity: fixture.substantiveReplacement.old !== fixture.substantiveReplacement.new,
    oldReferencesNotRetargeted: fixture.substantiveReplacement.retargetOldReferences === false,
    noIdentityInference: fixture.constraints.noIdentityEquivalenceInference === true,
    noGroupingInference: fixture.constraints.noGroupingInference === true,
    namesUnawareOpaqueRoundTrip: fixture.constraints.namesUnawareRoundTrip === true && fixture.opaqueUnknownData.preserve === true,
  };
}
