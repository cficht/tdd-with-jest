const fs = require('fs').promises;

function mkdirp(directory) {
  return fs.mkdir(directory, { recursive: true });
}

function writeJSON(path, obj) {
  return fs.writeFile(path, JSON.stringify(obj))
    .then(() => obj);
}

function readJSON(src) {
  return fs.readFile(src)
    .then(file => JSON.parse(file));
}

function readDirectoryJSON(directory) {
  return fs.readdir(directory)
    .then(files => {
      return Promise.all(files.map(file => readJSON(`${directory}/${file}`)));
    });
}

function updateJSON(path, obj) {
  return readJSON(path)
    .then(json => {
      return writeJSON(path, ({ ...json, ...obj }));
    });
}

function deleteFile(path) {
  return fs.unlink(path);
}

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
};
