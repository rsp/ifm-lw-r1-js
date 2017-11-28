'use strict';

const input1 = x => y => x(y);

const input2 = x => y => x(x(y));

const input3 = x => y => x(x(x(x(x(x(x(x(x(x(y))))))))));

const input4 = x => input3(input3(x));

const input5 = x => input3(input4(x));

const count = f => f(x => x + 1)(0);

module.exports = { input1, input2, input3, input4, input5, count };
