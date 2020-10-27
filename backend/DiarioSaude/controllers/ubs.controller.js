const Ubs = require('../models/ubs.model.js');

// Retrieve and return all ubs from the database.
exports.findAll = (req, res) => {
    Ubs.find()
    .then(ubs => {
        res.send(ubs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao carregar as UBS."
        });
    });
};

// Find a single ubs with a ubsId
exports.findOne = (req, res) => {
    Ubs.findById(req.params.ubsId)
    .then(ubs => {
        if(!ubs) {
            return res.status(404).send({
                message: "Nenhum ubs encontrada com o id: " + req.params.ubsId
            });            
        }
        res.send(ubs);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Nenhum ubs encontrada com o id:" + req.params.ubsId
            });                
        }
        return res.status(500).send({
            message: "Erro ao carregar ubs com id: " + req.params.ubsId
        });
    });
};