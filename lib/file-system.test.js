const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
} = require('./file-system.js');
const fs = require('fs').promises;

// describe('mkdirp function', () => {
//   it('makes a directory', () => {

//     const folderName = './my-cool-dir/child/more';

//     return mkdirp(folderName)
//       .then(() => fs.readdir('./my-cool-dir/child/more'))
//       .then(copyFolder => {
//         expect(copyFolder).toEqual(folderName);
//       });
//   });
// });

describe('writeJSON function', () => {
  const path = './JSONtest.txt';

  const obj = {     
    name: 'spot',
    age: 5,
    weight: '20 lbs' };

  afterEach(() => {
    return fs.unlink('./JSONtest.txt');
  });

  it('makes a stringified JSON file', () => {
    return writeJSON(path, obj)
      .then(() => fs.readFile(path))
      .then(fileRead => {
        expect(JSON.parse(fileRead)).toEqual(obj);
      });
  });
});
