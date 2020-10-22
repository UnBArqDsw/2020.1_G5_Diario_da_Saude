const HealthProfessional = require('../models/healthProfessional.model.js');

exports.create = function (req, res, next) {
  const healthProfessional = new HealthProfessional(
    {
      name: req.body.name,
      cpf: req.body.cpf,
      password: req.body.password,
      role: req.body.role,
    }
  );
  healthProfessional.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Registo de User criado com sucesso.')
  })
};

exports.details = function (req, res, next) {
  HealthProfessional.findById(req.params.cpf, function (err, user) {
    if (err) return next(err);
    res.send(user);
  })
};
