// const { isNumber, isString, isBoolean, isArray, isObject, isFunction, castToNumber, castToString, castToBoolean } = require('./lib/types.js');

// console.log(isNumber('3'));
// console.log(isString('word'));
// console.log(isString(3));
// console.log(isBoolean(true));
// console.log(isBoolean(false));
// console.log(isBoolean(1));
// console.log(isArray([]));
// console.log(isArray({}));
// console.log(isObject({}));
// console.log(isFunction(isBoolean));

// console.log(castToNumber({}));
// console.log(castToString([]));
// console.log(castToBoolean('false'));

const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
} = require('./lib/file-system.js');

const fs = require('fs').promises;

// mkdirp('./my-cool-dir/child/more');

// const path = './my-cool-dir/child/more';
// const obj = {     
//   name: 'spot',
//   age: 5,
//   weight: '20 lbs' };

// writeJSON(path, obj);

// console.log(fs.readdir('./my-cool-dir/child/more'));

