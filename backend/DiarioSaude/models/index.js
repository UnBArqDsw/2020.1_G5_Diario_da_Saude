const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.healthProfessional = require("./healthProfessional.model");
db.role = require("./role.model");
db.group = require("./group.model")

db.ROLES = ["patient", "healthProfessional"];

module.exports = db;

