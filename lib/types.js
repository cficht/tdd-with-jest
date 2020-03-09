const isNumber = val => typeof val === 'number';
const isString = str => typeof str === 'string';
const isBoolean = bool => typeof bool === 'boolean';
const isArray = arr => Array.isArray(arr);
const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
const isFunction = func => func instanceof Function;

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

const castToString = str => {
  if(isString(str)) return str;
  if(isNumber(str)) return str.toString();
  if(isBoolean(str)) return str.toString();
  if(typeof str !== 'string') throw new CastError(String, str);
  return str;
};

const castToBoolean = bool => {
  if(isObject(bool)) throw new CastError(Boolean, bool);
  if(isArray(bool)) throw new CastError(Boolean, bool);
  if(isFunction(bool)) throw new CastError(Boolean, bool);
  if(isBoolean(bool)) return bool;
  const boolean = Boolean(bool);
  if(typeof boolean !== 'boolean') throw new CastError(Boolean, bool);
  return boolean;
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  String: castToString,
  Boolean: castToBoolean
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean
};
