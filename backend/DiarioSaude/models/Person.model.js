const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {type: String, required: true, max: 100},
  password: {type: String, required: true},
  cpf: {type: Number, required: true},
});

module.exports = PersonSchema
