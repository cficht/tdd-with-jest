const { Schema } = require('../lib/Schema.js');

describe('Schema testing', () => {

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

  const rover = {
    name: 'rover',
    age: '10'
  };

  const who = {
    age: 'hi'
  };

  const otherDog = {
    name: 'brian',
    weight: '50 lbs'
  };

  const invalidDog = {
    name: {},
    age: 31,
    weight: '50 lbs'
  };

  it('Returns spot as is', () => {
    expect(schema.validate(spot)).toEqual(spot);
  });

  it('Returns rover with the age turned into a number', () => {
    expect(schema.validate(rover)).toEqual({
      name: 'rover',
      age: 10
    });
  });

  it('Throws an error for an object missing name', () => {
    expect(() => schema.validate(who)).toThrowErrorMatchingSnapshot();
  });

  it('Throws an error for an object missing age', () => {
    expect(() => schema.validate(otherDog)).toThrowErrorMatchingSnapshot();
  });

  it('Throws an error for an object with a name that has an invalid data type', () => {
    expect(() => schema.validate(invalidDog)).toThrowErrorMatchingSnapshot();
  });
});
