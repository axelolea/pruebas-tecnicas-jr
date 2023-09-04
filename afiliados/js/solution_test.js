import { test } from 'node:test';
import assert from 'node:assert/strict';

import { solution } from './solution.js';


test('first test of solution', t => {

    const arr = [
        '{"name": "Jonh Doe", "affiliate": true, "expired": "2023-10-01"}',
        '{"name": "Karl Thomson", "affiliate": false, "expired": "2022-01-01"}',
        '{"name": "Jessica Lee", "affiliate": true}',
        '{"name": "Margaret Hamilton", "affiliate": true, "expired": "2023-12-21"}'
    ]

    const expected = "Jonh Doe, Margaret Hamilton";

    assert.strictEqual(
        solution(arr), expected
    );

});

test('second test of solution', t => {

    const arr = [
        '{"name": "Karl Thomson", "affiliate": false, "expired": "2022-01-01"}',
        '{"name": "Margaret Hamilton", "affiliate": true, "expired": "2023-12-21"}'
    ]

    const expected = "Margaret Hamilton";

    assert.strictEqual(
        solution(arr), expected
    );

});