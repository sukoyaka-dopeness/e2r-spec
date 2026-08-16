import fixture from '../../examples/research/names/name-grouping-partial-roundtrip.json' with { type: 'json' };

function p1OnlyRoundTrip(value) {
  return JSON.parse(JSON.stringify(value));
}

export function runChecks() {
  const roundTripped = p1OnlyRoundTrip(fixture);
  return {
    expressionIdsPreserved: roundTripped.names.map((name) => name.id).join(',') === 'N1,N2',
    valuesPreserved: roundTripped.names[0].text === '東京' && roundTripped.names[1].text === 'Tokyo',
    metadataPreserved: roundTripped.names[0].language === 'ja' && roundTripped.names[1].script === 'Latn',
    opaqueGroupingPreserved: JSON.stringify(roundTripped.opaqueGrouping) === JSON.stringify(fixture.opaqueGrouping),
    historicalReferencePreserved: roundTripped.historicalReference.target === 'N1',
    noFlattening: roundTripped.names.length === 2,
  };
}
