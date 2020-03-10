const { Validator } = require('../lib/Validator.js');

class Schema {
  constructor(schema) {
    const validators = Object.entries(schema);
    this.validators = validators.map(([field, configuration]) => new Validator(field, configuration));
  }

  validate(obj) {
    const validated = {};
    this.validators.forEach(validator => {
      (validator.fieldName in obj) ? validated[validator.fieldName] = validator.validate(obj) : '';
    });
    return validated;

  }
}

module.exports = {
  Schema
};
