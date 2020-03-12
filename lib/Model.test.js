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

const { deleteFile, readDirectoryJSON } = require('./file-system.js');

const Book = new Model('Book', schema);

describe('Testing Model class', () => {

  afterAll(() => {
    return readDirectoryJSON('Book')
      .then(books => books.forEach(book => deleteFile(`Book/${book.id}`)));
  });

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

  it('finds by id', () => {
    return Book
      .create({ 
        name: 'A Brief History of Shirts',
        author: 'Frank Johnson',
        year: 2007,
        publisher: 'Cool Books'
      })
      .then(book => {
        return Book
          .findById(book.id);
      })
      .then(foundBook => {
        expect(foundBook).toEqual({
          id: expect.any(String),
          name: 'A Brief History of Shirts',
          author: 'Frank Johnson',
          year: 2007,
          publisher: 'Cool Books'
        });
      });
  });

  it('finds all items', () => {  
    return Book
      .create({ 
        name: 'A Brief History of Shirts',
        author: 'Frank Johnson',
        year: 2007,
        publisher: 'Cool Books'
      })
      .then(Book.find('Book'))
      .then(foundBooks => {
        expect(foundBooks).toEqual({
          id: expect.any(String),
          name: 'A Brief History of Shirts',
          author: 'Frank Johnson',
          year: 2007,
          publisher: 'Cool Books'
        });
      });
  });

  it('finds and updates an item', () => {  
    return Book
      .create({ 
        name: 'A Brief History of Shirts',
        author: 'Frank Johnson',
        year: 2007,
        publisher: 'Cool Books'
      })
      .then(book => {
        return Book
          .findByIdAndUpdate(book.id, { name: 'Shirts! Shirts! Shirts!' });
      })
      .then(foundBooks => {
        expect(foundBooks).toEqual({
          id: expect.any(String),
          name: 'Shirts! Shirts! Shirts!',
          author: 'Frank Johnson',
          year: 2007,
          publisher: 'Cool Books'
        });
      });
  });

  it('deletes an item', () => {
    return Book
      .create({ 
        name: 'A Brief History of Shirts',
        author: 'Frank Johnson',
        year: 2007,
        publisher: 'Cool Books'
      })
      .then(book => {
        return Book
          .findByIdAndDelete(book.id);
      })
      .then(deletedBook => {
        expect(deletedBook).toEqual(undefined);
      });
  });
});
