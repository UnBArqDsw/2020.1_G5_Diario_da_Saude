const mongoose  = require('mongoose'),
      bcrypt    = require('bcrypt'),
      Schema    = mongoose.Schema;
      Person    = require('./Person.model.js')

var patientSchema = new Schema({
  birthDate:{type: Date, required: true},
  gender:{type: String, enum: ['M', 'F', 'O'], required: true}
});

module.exports = Person.discriminator('patient', patientSchema);
