const { isNumber, isString, isBoolean } = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isString('word'));
console.log(isString(3));
console.log(isBoolean(true));
console.log(isBoolean(false));
console.log(isBoolean(1));
