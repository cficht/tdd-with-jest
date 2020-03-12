const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
} = require('./file-system.js');

const fs = require('fs').promises;

const folderName = './my-cool-dir';
const path = './JSONtest.json';
const obj = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve()),
    writeFile: jest.fn(() => Promise.resolve()),
    readFile: jest.fn(() => Promise.resolve('{"name":"spot"}')),
    readdir: jest.fn(() => Promise.resolve(['test.json', 'test2.json'])),
    unlink: jest.fn(() => Promise.resolve())
  }
}));


describe('mkdirp function', () => {
  it('makes a directory', () => {
    return mkdirp(folderName)
      .then(() => {
        expect(fs.mkdir)
          .toHaveBeenCalledWith(folderName, { recursive: true });
      });
  });
});

describe('writeJSON function', () => {
  it('makes a stringified JSON file', () => {
    return writeJSON(path, obj)
      .then(() => {
        expect(fs.writeFile)
          .toHaveBeenCalledWith(path, JSON.stringify(obj));
      });
  });
});

describe('readJSON function', () => {
  it('read a JSON file', () => {
    return readJSON(path)
      .then(data => {
        expect(fs.readFile)
          .toHaveBeenCalledWith(path);
        expect(data).toEqual({ name: 'spot' });
      });   
  });
});

describe('readDirectoryJSON function', () => {
  it('read a directory of JSON files', () => {
    return readDirectoryJSON('./data')
      .then(data => {
        expect(fs.readdir)
          .toHaveBeenCalledWith('./data');
        expect(fs.readFile)
          .toHaveBeenCalledWith('./data/test.json');
        expect(fs.readFile)
          .toHaveBeenCalledWith('./data/test2.json');
        expect(data).toEqual([{ name: 'spot' }, { name: 'spot' }]);
      });   
  });
});

describe('updateJSON function', () => {
  it('update a JSON file', () => {
    return updateJSON(path, obj)
      .then(data => {
        expect(fs.readFile)
          .toHaveBeenCalledWith(path);
        expect(fs.writeFile)
          .toHaveBeenCalledWith(path, JSON.stringify(obj));
        expect(data).toEqual(obj);
      });
  });
});

describe('deleteFile function', () => {
  it('deletes a file', () => {
    return deleteFile(path)
      .then(() => {
        expect(fs.unlink).toHaveBeenCalledWith(path);
      });
  });
});
