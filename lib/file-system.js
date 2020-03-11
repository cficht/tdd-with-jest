const fs = require('fs').promises;

function mkdirp(directoryName) {
  return fs.mkdir(directoryName, { recursive: true });
}

function writeJSON(path, obj) {
  return fs.writeFile(path, JSON.stringify(obj));
}

function readJSON() {

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
