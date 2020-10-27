const mongoose  = require('mongoose'),
      bcrypt    = require('bcrypt'),
      Schema    = mongoose.Schema;
      Person    = require('./Person.model.js')

var patientSchema = new Schema({
  birthDate:{type: Date, required: true},
  gender:{type: String, enum: ['M', 'F', 'O'], required: true}
});

class Patient extends Person.PersonClass{

  static getByGender(gender, callback){
    return this.findAll({gender:gender}, (err, user) => {
      if(err) throw err;
      callback(user)
    });
  }

  static getAge(cpf, callback){
    return this.findOne({cpf:cpf}, (err, user) =>{
      if(err) throw err;

        var today = new Date()
        var age = Math.abs(today, user.birthDay) / 31536000000;
        callback(err, age);

    })
  }

}

patientSchema.loadClass(Patient);

module.exports = Person.PersonModel.discriminator('patient', patientSchema);
