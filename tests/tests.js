'use strict';

const test = require('tape');
const solutions = require('../solutions');
const { input1, input2, input3, input4, input5, count } = require('../helpers');

test('sample input numerical tests', (t) => {
  t.plan(5);
  t.equal(count(input1), 1);
  t.equal(count(input2), 2);
  t.equal(count(input3), 10);
  t.equal(count(input4), 100);
  t.equal(count(input5), 1000);
});

Object.keys(solutions).forEach((k) => {
  test(`${k} numerical tests`, (t) => {
    const f = solutions[k];
    t.plan(5);
    t.equal(count(f(input1)), 0);
    t.equal(count(f(input2)), 1);
    t.equal(count(f(input3)), 9);
    t.equal(count(f(input4)), 99);
    t.equal(count(f(input5)), 999);
  });
});

const double = x => [x, x];
const parens = x => `(${x})`;

test('sample input non-numerical tests', (t) => {
  t.plan(5);
  t.deepEqual(input1(parens)('xxx'), '(xxx)');
  t.deepEqual(input2(parens)('xxx'), '((xxx))');
  t.deepEqual(input3(parens)('xxx'), '((((((((((xxx))))))))))');
  t.deepEqual(input1(double)('xxx'), ['xxx', 'xxx']);
  t.deepEqual(input2(double)('xxx'), [['xxx', 'xxx'], ['xxx', 'xxx']]);
});

Object.keys(solutions).forEach((k) => {
  test(`${k} non-numerical tests`, (t) => {
    const f = solutions[k];
    t.plan(5);
    t.deepEqual(f(input1)(parens)('xxx'), 'xxx');
    t.deepEqual(f(input2)(parens)('xxx'), '(xxx)');
    t.deepEqual(f(input3)(parens)('xxx'), '(((((((((xxx)))))))))');
    t.deepEqual(f(input1)(double)('xxx'), 'xxx');
    t.deepEqual(f(input2)(double)('xxx'), ['xxx', 'xxx']);
  });
});
