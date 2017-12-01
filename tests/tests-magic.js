'use strict';

const test = require('tape');
const solutions = require('../solutions');
const { input1, input2, input3, input4, input5, count } = require('../helpers');

const double = x => [x, x];
const parens = x => `(${x})`;
const concat = x => `${x}${x}`;
const xplusx = x => x + x;
const object = x => ({ value: x });
const arrays = x => [[[x], []], []];

const fs = Object.values(solutions);
const gs = [double, parens, concat, xplusx, object, arrays];
const as = [input1, input2, input3, input2(input2(input2))];
const xs = ['xxx', 5, [null], { object: null }, { a: [1] }];

let magic = 0;

for (const f of fs) {
  for (const a of as) {
    for (const g of gs) {
      for (const x of xs) {
        test(`magic test ${++magic}`, (t) => {
          t.plan(1);
          t.deepEqual(g(f(a)(g)(x)), a(g)(x));
        });
      }
    }
  }
}
