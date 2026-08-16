import test from 'node:test';
import assert from 'node:assert/strict';
import { runChecks } from './name-grouping-aware-missing-target-harness.mjs';

for (const [name, result] of Object.entries(runChecks())) {
  test(name, () => assert.equal(result, true));
}
