const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema;
      Person    = require('./Person.model.js')

var healthProfessionalSchema = new Schema({
  role: {type: String, required:true},
});

module.exports = Person.discriminator('HealthProfessional', healthProfessionalSchema);
