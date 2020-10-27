const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema;
      Person    = require('./Person.model.js')

var healthProfessionalSchema = new Schema({
  role: {type: String, required:true},
});

class healthProfessional extends Person.PersonClass{
 
  static getByRole(wanted,callback){
    console.log("HEHE: ", wanted)
    var users;
    this.find({role:wanted}, function(err, user){
      if(err) return err;
      console.log("OPA", user)
      callback(user)

      users = user;
    })
    return users
  }

}

healthProfessionalSchema.loadClass(healthProfessional);

module.exports = Person.PersonModel.discriminator('healthProfessional', healthProfessionalSchema);
