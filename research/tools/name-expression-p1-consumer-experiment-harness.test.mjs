import test from 'node:test';
import assert from 'node:assert/strict';
import { runChecks } from './name-expression-p1-consumer-experiment-harness.mjs';

for (const [name, result] of Object.entries(runChecks())) {
  test(name, () => assert.equal(result, true));
}
