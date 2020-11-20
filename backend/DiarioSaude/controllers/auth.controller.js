const config = require("../config/auth.config");
const db = require("../models");
const Person = db.person
const healthProfessional = db.healthProfessional;
const Patient = db.patient
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
    var user = {}
    if(req.body.roles[0] === "healthProfessional"){
        user = new healthProfessional({
          name: req.body.name,
          password: bcrypt.hashSync(req.body.password, 8),
          cpf: req.body.cpf,
          role: req.body.role
        });
    } else{
      user = new Patient({
          name: req.body.name,
          password: bcrypt.hashSync(req.body.password, 8),
          cpf: req.body.cpf,
          birthDate: req.body.birthDate,
          gender: req.body.gender
      })
    }
  

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    }
  });
};

exports.signin = (req, res) => {
  healthProfessional.findOne({
    cpf: req.body.cpf
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {

          Patient.findOne({
            cpf: req.body.cpf
          })
            .populate("roles", "-__v")
            .exec((err, user) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
          if(!user)
            return res.status(404).send({ message: "User Not found." });

            var passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password
            );

            if (!passwordIsValid) {
              return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
              });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
              expiresIn: 86400 // 24 hours
            });


            res.status(200).send({
              id: user._id,
              name: user.name,
              cpf: user.cpf,
              roles: user.__t.toUpperCase(),
              accessToken: token
            });
        });
              return;
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user._id,
        name: user.name,
        cpf: user.cpf,
        roles: user.__t.toUpperCase(),
        accessToken: token
      });
    });
};

exports.getUser = (req, res) => {
  console.log(req)
  Person.getPerson(req.params.cpf, (err, user) => {
    if(err) res.json({status: 400, message: err})
    res.json({status:200, user: {name: user.name, id: user.id, birthDate: user.birthDate, gender: user.gender}})
  })
}
