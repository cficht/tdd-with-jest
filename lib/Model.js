const path = require('path');
const uuid = require('uuid/v4');
const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
} = require('./file-system.js');

class Model {
  constructor(modelName, schema) {
    this.modelName = modelName,
    this.schema = schema,
    mkdirp(this.modelName);
  }

  create() {

  }

  findById() {

  }

  find() {

  }

  findByIdAndUpdate() {

  }

  findByIdAndDelete() {

  }

}

module.exports = {
  Model
};
