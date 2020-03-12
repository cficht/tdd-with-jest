const Schema = require('./Schema');
const { Model } = require('./Model');

const schema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  publisher: {
    type: String
  }
});

const Book = new Model('Book', schema);

describe('Testing Model class', () => {
  it('creates a new document', () => {
    return Book
      .create({ 
        name: 'A Brief History of Shirts',
        author: 'Frank Johnson',
        year: 2007,
        publisher: 'Cool Books'
      })
      .then(book => {
        expect(book).toEqual({
          id: expect.any(String),
          name: 'A Brief History of Shirts',
          author: 'Frank Johnson',
          year: 2007,
          publisher: 'Cool Books'
        });
      });
  });

});
