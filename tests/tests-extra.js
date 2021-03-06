'use strict';

const test = require('tape');
const solutions = require('../solutions');
const { input1, input2, input3, input4, input5, count } = require('../helpers');

const double = x => [x, x];
const parens = x => `(${x})`;
const concat = x => `${x}${x}`;

test('sample input non-numerical tests', (t) => {
  t.plan(7);
  t.deepEqual(input1(parens)('xxx'), '(xxx)');
  t.deepEqual(input2(parens)('xxx'), '((xxx))');
  t.deepEqual(input3(parens)('xxx'), '((((((((((xxx))))))))))');
  t.deepEqual(input1(double)('xxx'), ['xxx', 'xxx']);
  t.deepEqual(input2(double)('xxx'), [['xxx', 'xxx'], ['xxx', 'xxx']]);
  t.deepEqual(input1(concat)('xxx'), 'xxxxxx');
  t.deepEqual(input2(concat)('xxx'), 'xxxxxxxxxxxx');
});

Object.keys(solutions).forEach((k) => {
  test(`${k} non-numerical tests`, (t) => {
    const f = solutions[k];
    t.plan(7);
    t.deepEqual(f(input1)(parens)('xxx'), 'xxx');
    t.deepEqual(f(input2)(parens)('xxx'), '(xxx)');
    t.deepEqual(f(input3)(parens)('xxx'), '(((((((((xxx)))))))))');
    t.deepEqual(f(input1)(double)('xxx'), 'xxx');
    t.deepEqual(f(input2)(double)('xxx'), ['xxx', 'xxx']);
    t.deepEqual(f(input1)(concat)('xxx'), 'xxx');
    t.deepEqual(f(input2)(concat)('xxx'), 'xxxxxx');
  });
});
