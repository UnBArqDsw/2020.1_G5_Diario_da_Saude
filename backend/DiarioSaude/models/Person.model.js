const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {type: String, required: true, max: 100},
  password: {type: String, required: true},
  cpf: {type: Number, required: true, unique: true},
  roles: [{type: Schema.Types.ObjectId, ref: "Role"}]
});
  
module.exports = mongoose.model('Person', PersonSchema)
