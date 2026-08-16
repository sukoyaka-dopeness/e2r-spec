import fixture from '../../examples/research/names/name-grouping-replacement-non-retargeting.json' with { type: 'json' };

export function runChecks() {
  return {
    oldMembershipPreserved: fixture.postReplacement.members.includes('N2'),
    newExpressionNotAdded: !fixture.postReplacement.members.includes('N4'),
    noRetarget: fixture.constraints.noAutomaticRetarget === true,
    missingOldDistinct: fixture.constraints.missingOldRemainsDistinct === true,
    substantiveReplacementRecorded: fixture.replacement.substantive === true,
  };
}
