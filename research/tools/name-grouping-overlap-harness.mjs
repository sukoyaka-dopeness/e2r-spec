import fixture from '../../examples/research/names/name-grouping-overlap.json' with { type: 'json' };

export function runChecks() {
  const [first, second] = fixture.groupingFacts;
  return {
    sharedExpressionParticipates: first.members.includes('N2') && second.members.includes('N2'),
    rationalesRemainDistinct: first.rationale !== second.rationale && fixture.constraints.rationalesDistinct,
    identityIndependent: fixture.constraints.expressionIdentityIndependent,
    noInferredEquivalence: fixture.constraints.noInferredEquivalence,
    noInferredPreference: fixture.constraints.noInferredPreference,
  };
}
