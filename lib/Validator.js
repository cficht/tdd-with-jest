const { getCaster } = require('../lib/types.js');

class Validator {
  constructor(fieldName, configuration) {
    this.fieldName = fieldName;
    this.configuration = configuration;
  }

  validate(obj) {
    if(obj[this.fieldName]) {
      const cast = getCaster(this.configuration.type);
      return cast(obj[this.fieldName]);
    } else if(!obj[this.fieldName] && this.configuration.required) {
      throw new Error(`${this.fieldName} is required`);
    } else {
      return '';
    }
  }
}

module.exports = {
  Validator
};
