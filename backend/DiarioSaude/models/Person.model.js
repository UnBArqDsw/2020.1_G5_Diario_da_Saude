const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {type: String, required: true, max: 100},
  password: {type: String, required: true},
  cpf: {type: Number, required: true, unique: true},
});

class PersonClass{

  static getPerson(cpf, callback){
    this.findOne({cpf:cpf}, (err, user) => {
      console.log("Entrei aqui ", user)
      if(err) console.log(err);
      
      callback(err, user)
    });
  }

  static getByRoles(role){
    return this.findAll({roles:[role]})
  }
  
}

PersonSchema.loadClass(PersonClass)

const PersonModel = mongoose.model('person', PersonSchema)
  
module.exports = {PersonClass, PersonSchema, PersonModel}
