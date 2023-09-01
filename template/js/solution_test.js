import { test } from 'node:test';
import assert from 'node:assert/strict';
import { solution } from './solution.js';


test('first test of solution', t => {

    const values = 0;

    assert.strictEqual(
        solution(values), null
    )

})

test('second test of solution', t => {

    // Fail test
    assert.strictEqual(
        1, 0
    )

})