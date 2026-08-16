import fixture from '../../examples/research/names/name-expression-p1-entity-discovery.json' with { type: 'json' };

export function runChecks() {
  return {
    allExpressionsDiscoverEntity: Object.values(fixture.exactDiscovery).every((entity) => entity === 'E1'),
    expressionsRemainDistinct: new Set(fixture.expressions.map((expression) => expression.id)).size === 3,
    noRanking: fixture.constraints.noRanking === true,
    noPreference: fixture.constraints.noPreference === true,
    noGrouping: fixture.constraints.noGrouping === true,
  };
}
