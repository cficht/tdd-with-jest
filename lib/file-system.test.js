const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
} = require('./file-system.js');

const fs = require('fs').promises;

const path = './JSONtest.txt';

const obj = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};




describe('mkdirp function', () => {
  const folderName = './my-cool-dir';

  afterEach(() => {
    return fs.rmdir(folderName);
  });

  it('makes a directory', () => {  
    return mkdirp(folderName)
      .then(() => fs.readdir(folderName))
      .then(copyFolder => {
        expect(copyFolder).toEqual([]);
      });
  });
});


describe('writeJSON function', () => {
  afterEach(() => {
    return fs.unlink(path);
  });
  it('makes a stringified JSON file', () => {
    return writeJSON(path, obj)
      .then(() => fs.readFile(path))
      .then(fileRead => {
        expect(JSON.parse(fileRead)).toEqual(obj);
      });
  });
});

describe('readJSON function', () => {
  afterEach(() => {
    return fs.unlink(path);
  });
  it('read a JSON file', () => {
    return writeJSON(path, obj)
      .then(() => readJSON(path))
      .then(fileRead => {
        expect(fileRead).toEqual(obj);
      });
  });
});
