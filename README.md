# is-undefined
Checks if a value is undefined.

## Installation
```bash
$ npm install @is-(unknown)/is-undefined
```

## Usage
```js
var isUndefined = require('@is-(unknown)/is-undefined');

console.log(isUndefined()) // true
console.log(isUndefined(undefined)) // true
console.log(isUndefined('anything else')) // false
```