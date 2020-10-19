var User = require('../models/user.model');

exports.create = function (req, res, next) {
  let user = new User(
    {
      nome: req.body.nome
    }
  );
  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Registo de User criado com sucesso')
  })
};

exports.details = function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.send(user);
  })
};
