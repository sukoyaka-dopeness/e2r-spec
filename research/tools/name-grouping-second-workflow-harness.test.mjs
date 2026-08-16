import test from 'node:test';
import assert from 'node:assert/strict';
import { runChecks } from './name-grouping-second-workflow-harness.mjs';

const checks = runChecks();
for (const [name, result] of Object.entries(checks)) {
  test(name, () => assert.equal(result, true));
}
