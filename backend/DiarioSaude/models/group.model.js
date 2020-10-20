const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    groupName: {type: String, required: true},
    idForm : {type: Number, required: false},
    idUBS : {type: Number, required: true},
    users: {type: [Number], required: false},
    
});

module.exports = mongoose.model('Group', GroupSchema);