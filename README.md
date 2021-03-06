inFullMobile Language Wars: Round 1 - JavaScript
================================================
[![npm install][install-img]][npm-url]
<br>
[![Travis Build Status][travis-shield]][travis-url]
[![CircleCI Build Status][circle-shield]][circle-url]
[![Build Status][travis-img]][travis-url]
[![CircleCI][circle-img]][circle-url]
[![Dependencies Status][david-img]][david-url]
[![Known Vulnerabilities][snyk-img]][snyk-url]
[![Downloads][downloads-img]][stats-url]
[![License][license-img]][license-url]

JavaScript solution to inFullMobile Language Wars: Round 1. For more info see:

* [inFullMobile Language Wars: Introduction](https://blog.infullmobile.com/language-wars-introduction-8ea0598e897)
* [inFullMobile Language Wars: Round 1 Task Summary](https://gist.github.com/rsp/4255663f8c5a5e58bc9818a6174fe28f)

This solution uses a modern syntax.
See also [the old JavaScript solution](https://github.com/rsp/ifm-lw-r1-ojs)
in the original syntax from 1995.

Solutions
---------
Solutions to the challange:

1. Simple iterative solution with loops and temporary variables:
[solution-1.js](solution-1.js) ([gist][solution-1-new-gist])
2. Simple recursive solution with no loops and no temporary variables:
[solution-2.js](solution-2.js) ([gist][solution-2-new-gist])
3. Compact functional solution with no loops, no variables and no arithmetical operators:
[solution-3.js](solution-3.js) ([gist][solution-3-new-gist])

Sample input
------------
Sample input to test the solution: [helpers.js](helpers.js)

(See helpers from [the old JavaScript solution](https://github.com/rsp/ifm-lw-r1-ojs)
for easier translation to other languages.)

Tests
-----
Simple implementation tests:
- [tests.js](tests/tests.js)

Extra tests on non-numerical functions:
- [tests-extra.js](tests/tests-extra.js)

Magic tests based on `g(f(a)(g)(x)) === a(g)(x)` equality:
- [tests-magic.js](tests/tests-magic.js)

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub][issues-url].

Author
------
[**Rafał Pocztarski**](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

[npm-url]: https://www.npmjs.com/package/ifm-lw-r1-js
[github-url]: https://github.com/rsp/ifm-lw-r1-js
[readme-url]: https://github.com/rsp/ifm-lw-r1-js#readme
[issues-url]: https://github.com/rsp/ifm-lw-r1-js/issues
[license-url]: https://github.com/rsp/ifm-lw-r1-js/blob/master/LICENSE.md
[travis-url]: https://travis-ci.org/rsp/ifm-lw-r1-js
[travis-img]: https://travis-ci.org/rsp/ifm-lw-r1-js.svg?branch=master
[travis-shield]: https://img.shields.io/travis/rsp/ifm-lw-r1-js.svg?label=Travis+CI
[circle-url]: https://circleci.com/gh/rsp/ifm-lw-r1-js
[circle-img]: https://circleci.com/gh/rsp/ifm-lw-r1-js.svg?style=svg&circle-token=297eb2043562377c18aa17ecb8fa7286be8bf229
[circle-shield]: https://img.shields.io/circleci/project/github/rsp/ifm-lw-r1-js.svg?label=Circle+CI
[snyk-url]: https://snyk.io/test/github/rsp/ifm-lw-r1-js
[snyk-img]: https://snyk.io/test/github/rsp/ifm-lw-r1-js/badge.svg
[david-url]: https://david-dm.org/rsp/ifm-lw-r1-js
[david-img]: https://david-dm.org/rsp/ifm-lw-r1-js/status.svg
[install-img]: https://nodei.co/npm/ifm-lw-r1-js.png?compact=true
[downloads-img]: https://img.shields.io/npm/dt/ifm-lw-r1-js.svg
[license-img]: https://img.shields.io/npm/l/ifm-lw-r1-js.svg
[stats-url]: http://npm-stat.com/charts.html?package=ifm-lw-r1-js
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png
[solution-1-old-gist]: https://gist.github.com/rsp/40f69fb7cb0b96124fcb02459ce66472
[solution-1-new-gist]: https://gist.github.com/rsp/37e0b859bde229c22f9016d48685ff70
[solution-2-old-gist]: https://gist.github.com/rsp/c1607c8a9f489faa136c81b578428048
[solution-2-new-gist]: https://gist.github.com/rsp/17d69b2104be486f69a225fdcaca7869
[solution-3-old-gist]: https://gist.github.com/rsp/d2c88e304a40805ef247c0cd5ac1e065
[solution-3-new-gist]: https://gist.github.com/rsp/b85c279311464fdf4ed1ddb80f15b491
