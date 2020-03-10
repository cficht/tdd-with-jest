// const { isNumber, isString, isBoolean, isArray, isObject, isFunction, castToNumber, castToString, castToBoolean } = require('./lib/types.js');

const { Schema } = require('./lib/Schema.js');

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




// const nameValidator = new Validator('name', {
//   type: String,
//   required: true
// });

// const spot = {
//   name: 'spot',
//   age: 5,
//   weight: '20 lbs'
// };

// const spotless = {
//   age: 5,
//   weight: '20 lbs'
// };

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
});

const spot = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

console.log(schema.validate(spot));
