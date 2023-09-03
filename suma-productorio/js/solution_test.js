import { test } from 'node:test';
import assert from 'node:assert/strict';

import { solution } from './solution.js';


test('first even sum test', t => {

    const values = [4, 5, 8, 11];
    const expected = 1760;

    assert.strictEqual(
        solution(values), expected
    );

});

test('first odd sum test', t => {

    const values = [9, 12, 6, 3, 7];
    const expected = 0;

    assert.strictEqual(
        solution(values), expected
    );

});
