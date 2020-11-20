const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.healthProfessional = require("./healthProfessional.model");
db.patient = require("./patient.model")
db.role = require("./role.model");
db.group = require("./group.model")
person = require("./Person.model")
db.person = person.PersonModel

db.ROLES = ["patient", "healthProfessional"];

module.exports = db;

