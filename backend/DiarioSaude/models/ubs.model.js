const mongoose = require('mongoose');

const UbsSchema = mongoose.Schema({
    ubsName: {type: String, required: true},
    city : {type: String, required: true},
    state : {type: String, required: true},
    cep : {type: Number, required: true}
});

module.exports = mongoose.model('Ubs', UbsSchema);