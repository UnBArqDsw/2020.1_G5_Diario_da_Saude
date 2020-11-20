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
        idUBS: req.body.idUBS,
        idForm: req.body.idForm,
        users: req.body.users
    });

    // Save Group in the database
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
    Group.find()
    .then(groups => {
        res.send(groups);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao carregar os grupos."
        });
    });
};

// Find a single group with a groupId
exports.findOne = (req, res) => {
    Group.findById(req.params.groupId)
    .then(group => {
        if(!group) {
            return res.status(404).send({
                message: "Nenhum grupo encontrado com o id: " + req.params.groupId
            });            
        }
        res.send(group);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Nenhum grupo encontrado com o id:" + req.params.groupId
            });                
        }
        return res.status(500).send({
            message: "Erro ao carregar groupo com id: " + req.params.groupId
        });
    });
};

// Update a group identified by the groupId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Conteúdo de grupo não pode estar vazio"
        });
    }

    // Find note and update it with the request body
    Group.findByIdAndUpdate(req.params.groupId, {
        groupName: req.body.groupName,
        idUBS: req.body.idUBS,
        idForm: req.body.idForm,
        users: req.body.users
    }, {new: true})
    .then(group => {
        if(!group) {
            return res.status(404).send({
                message: "Nenhum grupo foi encontrado com o id: " + req.params.groupId
            });
        }
        res.send(group);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Nenhum grupo foi encontrado com o id: " + req.params.groupId
            });                
        }
        return res.status(500).send({
            message: "Um erro ocorreu na atualização do grupo de id: " + req.params.groupId
        });
    });
};

// Delete a group with the specified groupId in the request
exports.delete = (req, res) => {
    Group.findByIdAndRemove(req.params.groupId)
    .then(group => {
        if(!group) {
            return res.status(404).send({
                message: "Nenhum grupo foi encontrado com o id: " + req.params.groupId
            });
        }
        res.send({message: "group deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Nenhum grupo foi encontrado com o id: " + req.params.groupId
            });                
        }
        return res.status(500).send({
            message: "Não foi possível deletar o grupo de id: " + req.params.groupId
        });
    });
};

exports.addForm = (req, res) => {
  Group.findByIdAndUpdate(req.body.group_id, 
                          { $set: {"form": req.body.form_id}}, 
                          (err, group) => {
                            if (err) res.json({status: 400, message: "Could not update group"})
                            res.json({status:200, message: "Group updated"})
                          })
}

exports.addMember = (req, res) => {
  Group.findByIdAndUpdate(req.body.group_id,
                          { $push: {"users": req.body.member_id} },
                          (err, group) => {
                            if(err) res.json({status:400, message: "Could not add member"})
                            res.json({status: 200, message: "Member added"})
                          })
}

exports.listMember = (req, res) => {
  Group.findById(req.body.group_id, (err, group) => {
    if(err) res.json({status:400, message: err})

    res.json({status:200, members: group.users})
  })
}
