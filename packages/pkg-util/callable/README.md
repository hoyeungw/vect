## @vect/callable
Make a class callable by inherit the class Callable.

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![npm dependents][badge-npm-dependents]][url-github]
[![npm license][badge-npm-license]][url-npm]
[![pp install size][badge-pp-install-size]][url-pp]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@vect/callable
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@vect/callable
[badge-npm-download-total]:https://flat.badgen.net/npm/dt/@vect/callable
[badge-npm-dependents]: https://flat.badgen.net/npm/dependents/@vect/callable
[badge-npm-license]: https://flat.badgen.net/npm/license/@vect/callable
[badge-pp-install-size]: https://flat.badgen.net/packagephobia/install/@vect/callable
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/vect
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/vect

[//]: <> (Link)
[url-npm]: https://npmjs.org/package/@vect/callable
[url-pp]: https://packagephobia.now.sh/result?prev=@vect/callable
[url-github]: https://github.com/hoyeungw/vect

## Features

- ES2015 syntax

## Install
```console
$ npm install @vect/callable
```

## Usage
```js
import { Callable } from '@vect/callable'

class CallableClass extends Callable {
  constructor (a, b) {
    super(row => this.a + this.b + row)
    this.a = a
    this.b = b
  }
}

const callableClass = new CallableClass(5, 4)
console.log(callableClass(3)) // 12

```

## Meta
[LICENSE (MIT)](LICENSE)
