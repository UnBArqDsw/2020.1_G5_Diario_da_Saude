const mongoose  = require('mongoose'),
      bcrypt    = require('bcrypt'),
      Schema    = mongoose.Schema;
      Person    = require('./Person.model.js')

var patientSchema = new Schema({
  cpf: {type: Number, required: true},
  name: {type: String, required: true, max: 200},
  password: {type: String, required: true},
  birthDate:{type: Date, required: true},
  gender:{type: String, enum: ['M', 'F', 'O'], required: true}
  roles: [{type: Schema.Types.ObjectId, ref: "Role"}]
});

patientSchema.pre("save", (next) => {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
        user.password = hash;
        next();
    });
  });
})

patientSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
      cb(null, isMatch);
  });
};

module.exports = mongoose.model('patient', patientSchema);
