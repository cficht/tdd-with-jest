const { Validator } = require('../lib/Validator.js');

describe('Validator testing', () => {

  const nameValidator = new Validator('name', {
    type: String,
    required: true
  });
  
  const ageValidator = new Validator('age', {
    type: Number,
    required: true
  });
  
  const weightValidator = new Validator('weight', {
    type: String,
    required: false
  });


  it('Validator has a field and configuration property', () => {
    expect(nameValidator.fieldName).toEqual('name');
    expect(nameValidator.configuration).toEqual({
      type: String,
      required: true
    });
  });

  it('Validates object with the proper type', () => {
    const spot = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };
    expect(nameValidator.validate(spot)).toEqual('spot');
  });

  it('Validates a name and outputs it', () => {
    expect(nameValidator.validate({ name: 'spot' })).toEqual('spot');
  });

  it('Validates a name that\'s a number and turns it into a string', () => {
    expect(nameValidator.validate({ name: 1 })).toEqual('1');
  });

  it('Validates an age and outputs it', () => {
    expect(ageValidator.validate({ age: 13 })).toEqual(13);
  });

  it('Validates a string number and turns it into a number', () => {
    expect(ageValidator.validate({ age: '4' })).toEqual(4);
  });

  it('Validates an string number and turns it into a number', () => {
    expect(weightValidator.validate({ weight: '20 lbs' })).toEqual('20 lbs');
  });

  it('Validates an string number and turns it into a number', () => {
    expect(weightValidator.validate({ age: 20 })).toEqual(null);
  });

  it('Throws an error if no name', () => {
    const nameless = {
      age: 5,
      weight: '20 lbs'
    };
    expect(() => nameValidator.validate(nameless)).toThrowErrorMatchingSnapshot();
  });

  it('Throws an error if no age', () => {
    const ageless = {
      name: 'bob',
      weight: '20 lbs'
    };
    expect(() => ageValidator.validate(ageless)).toThrowErrorMatchingSnapshot();
  });

  it('Throws an error if attempting to put an object for a name', () => {
    expect(() => nameValidator.validate({ name: {} })).toThrowErrorMatchingSnapshot();
  });

  it('Throws an error if attempting to put an array for an age', () => {
    expect(() => ageValidator.validate({ age: [2, 3] })).toThrowErrorMatchingSnapshot();
  });
});
