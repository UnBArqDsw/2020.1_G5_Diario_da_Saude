const Patient = require('../models/patient.model.js');

exports.create = function (req, res, next) {
  const patient = new Patient(
    {
      name: req.body.name,
      cpf: req.body.cpf,
      password: req.body.password,
      gender: req.body.gender,
      birthDate: req.body.birthDate
    }
  );
  patient.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Registo de User criado com sucesso.')
  })
};

exports.details = function (req, res, next) {
  patient.findById(req.params.cpf, function (err, user) {
    if (err) return next(err);
    res.send(user);
  })
};
