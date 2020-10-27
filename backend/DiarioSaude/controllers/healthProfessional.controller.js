const HealthProfessional = require('../models/healthProfessional.model.js');

exports.create = function (req, res, next) {
  const healthProfessional = new mongoose.model('healthProfessional')(
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
  console.log(`DETAILS: ${req.params.cpf}`)
  HealthProfessional.getPerson({cpf:req.params.cpf}, function (err, user) {
    if (err) return next(err);
    res.send(user);
  })
};

exports.getByRole = function (req, res, next) {
  HealthProfessional.getByRole(req.params.wanted, (user) => {
    res.send(user)
  })
}
