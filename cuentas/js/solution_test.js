import { test } from 'node:test';
import assert from 'node:assert/strict';

import { solution } from './solution.js';


test('5 converted to 10', t => {

    const n = 5;
    const expected = 10;

    assert.strictEqual(
        solution(n), expected
    );

});

test('8 converted to 26', t => {

    const n = 8;
    const expected = 26;

    assert.strictEqual(
        solution(n), expected
    );

});

test('12 converted to 41', t => {

    const n = 12;
    const expected = 41;

    assert.strictEqual(
        solution(n), expected
    );

});

test('15 converted to 68', t => {

    const n = 15;
    const expected = 68;

    assert.strictEqual(
        solution(n), expected
    );

});

test('especial test', t => {

    const n = 15;
    const n2 = 14;

    assert.strictEqual(
        solution(n), solution(n2)
    );

});

test('30 converted to 68', t => {

    const n = 30;
    const expected = 256;

    assert.strictEqual(
        solution(n), expected
    );

});


