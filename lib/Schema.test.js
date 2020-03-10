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

  it('Returns spot', () => {
    expect(schema.validate(spot)).toEqual(spot);
  });

  it('Returns rover', () => {
    expect(schema.validate(rover)).toEqual({
      name: 'rover',
      age: 10
    });
  });

  it('Throws an error for invalid schema object', () => {
    expect(() => schema.validate(who)).toThrowErrorMatchingSnapshot();
  });
});
