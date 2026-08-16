import fixture from '../../examples/research/names/name-grouping-binding-target.json' with { type: 'json' };

export function runChecks() {
  const bindingConsumer = fixture.candidateConsumers.find((consumer) => consumer.target === 'binding');
  return {
    exactHistoryTargetsExpression: fixture.candidateConsumers[0].target === 'expression',
    catalogTargetsGroupingFact: fixture.candidateConsumers[1].target === 'grouping-fact',
    bindingEvidenceMissing: bindingConsumer?.evidence === 'missing',
    noPromotion: fixture.promotion.stableBindingTargetEstablished === false,
    historicalOwnershipMissing: fixture.promotion.historicalValueOwnershipEstablished === false,
  };
}
