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

  create(obj) {
    const id = uuid();
    const validated = this.schema.validate(obj);
    return writeJSON(`${this.modelName}/${id}`, { ...validated, id });
  }

  findById(id) {
    return readJSON(`${this.modelName}/${id}`);
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
