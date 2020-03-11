const fs = require('fs').promises;

function mkdirp(directoryName) {
  return fs.mkdir(directoryName, { recursive: true });
}

function writeJSON(path, obj) {
  return fs.writeFile(path, JSON.stringify(obj));
}

function readJSON(src) {
  return fs.readFile(src)
    .then(file => JSON.parse(file));
}

function readDirectoryJSON() {

}

function updateJSON() {

}

function deleteFile() {

}

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
}
;
