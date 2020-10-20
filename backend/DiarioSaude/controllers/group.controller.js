const Group = require('../models/group.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.groupName) {
        return res.status(400).send({
            message: "O campo groupName não pode estar vazio"
        });
    } else if (!req.body.idUBS){
        return res.status(400).send({
            message: "O campo idUBS não pode estar vazio"
        });
    }

    // Create a Group
    const group = new Group({
        groupName: req.body.groupName,
        idUBS: req.body.idUBS
    });

    // Save Note in the database
    group.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu na crição do grupo."
        });
    });
};

// Retrieve and return all groups from the database.
exports.findAll = (req, res) => {

};

// Find a single group with a groupId
exports.findOne = (req, res) => {

};

// Update a group identified by the groupId in the request
exports.update = (req, res) => {

};

// Delete a group with the specified groupId in the request
exports.delete = (req, res) => {

};