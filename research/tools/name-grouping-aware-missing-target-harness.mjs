import fixture from '../../examples/research/names/name-grouping-aware-missing-target.json' with { type: 'json' };

export function runChecks() {
  return {
    groupingPreserved: fixture.grouping.members.length === 3,
    knownMembersPreserved: fixture.knownExpressions.join(',') === 'N1,N3',
    unresolvedDistinguished: fixture.unresolvedExpressions[0] === 'N2',
    noReplacementInferred: !fixture.replacement,
    capabilityUnderstood: fixture.capability.groupingUnderstood === true,
  };
}
