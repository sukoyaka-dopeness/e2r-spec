import fixture from '../../examples/research/names/name-grouping-second-workflow.json' with { type: 'json' };

export function runChecks() {
  return {
    distinctFamilies: fixture.candidateGroupingFacts.length === 2 &&
      fixture.candidateGroupingFacts[0].members.join(',') !== fixture.candidateGroupingFacts[1].members.join(','),
    sameEntity: fixture.expressions.every((expression) => expression.id.startsWith('N')),
    groupingNotIdentity: fixture.constraints.groupingIsNotIdentity === true,
    groupingNotPreference: fixture.constraints.groupingIsNotPreference === true,
    noHistoryPropagation: fixture.constraints.groupingDoesNotPropagateHistory === true,
  };
}
