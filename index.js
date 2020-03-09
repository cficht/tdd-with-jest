const { isNumber, isString, isBoolean, isArray, isObject, isFunction, castToNumber, castToString, castToBoolean } = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isString('word'));
console.log(isString(3));
console.log(isBoolean(true));
console.log(isBoolean(false));
console.log(isBoolean(1));
console.log(isArray([]));
console.log(isArray({}));
console.log(isObject({}));
console.log(isFunction(isBoolean));

console.log(castToNumber({}));
console.log(castToString([]));
console.log(castToBoolean('false'));
