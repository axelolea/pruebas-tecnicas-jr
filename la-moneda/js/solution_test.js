import { test } from 'node:test';
import assert from 'node:assert/strict';
import { solution } from './solution.js';

// Constantes
const [x, o] = ["x", "o"];

test('array sin valores', t => {

    const arr = [];
    const expected = 0;

    assert.strictEqual(
        solution(arr), expected
    );

});

test('array con un valor cruz', t => {

    const arr = [x];
    const expected = 1;

    assert.strictEqual(
        solution(arr), expected
    );

});

test('array con un valor cara', t => {

    const arr = [o];
    const expected = 1;

    assert.strictEqual(
        solution(arr), expected
    );

});

test('array completo con valores cruz', t => {

    const arr = [x, x, x, x, x];
    const expected = 5;

    assert.strictEqual(
        solution(arr), expected
    );

});

test('array completo con valores cara', t => {

    const arr = [o, o, o];
    const expected = 3;

    assert.strictEqual(
        solution(arr), expected
    );

});

test('array mitad cara y mitad con cruz', t => {

    const arr = [o, x, x, o, x, o];
    const expected = 3;

    assert.strictEqual(
        solution(arr), expected
    );

});

test('array mas valores cruz', t => {

    const arr = [x, x, o, o, x];
    const expected = 3;

    assert.strictEqual(
        solution(arr), expected
    );

});

test('array mas valores cara', t => {

    const arr = [o, x, o, o, x, o, o];
    const expected = 5;

    assert.strictEqual(
        solution(arr), expected
    );

});
