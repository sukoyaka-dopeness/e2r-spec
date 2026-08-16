import fixture from '../../examples/research/names/name-grouping-unrelated-edit-preservation.json' with { type: 'json' };

function applyUnrelatedEdit(value) {
  const copy = structuredClone(value);
  copy.names[0].context = copy.edit.to;
  return copy;
}

export function runChecks() {
  const saved = applyUnrelatedEdit(fixture);
  return {
    understoodEditApplied: saved.names[0].context === 'catalog-b',
    opaqueGroupingPreserved: JSON.stringify(saved.opaqueGrouping) === JSON.stringify(fixture.opaqueGrouping),
    membersPreserved: saved.opaqueGrouping.members.join(',') === 'N1,N2,N3',
    unknownDataNotNormalizedAway: saved.opaqueGrouping.rationale === 'current-multilingual',
  };
}
