const Glucose = require('../models/TypeQuestion/Glucose.model')
const BloodPressure = require('../models/TypeQuestion/BloodPressure.model')
const WellBeing = require('../models/TypeQuestion/WellBeing.model')

exports.createGlucose = (req, res, next) => {
  const question = new Glucose({
    answer: req.body.answer ? req.body.answer : '',
    patient: req.body.patient ? req.body.patient: '',
    date: new Date(),
  })

  question.save((err, question) => {
    if(err){
      res.status(500).send({message: err})
      return;
    }

    res.send({message: "question registered"})
  })
}

exports.getGlucose = (req, res, next) => {
  Glucose.getAnswer(req.body.cpf, (err, list) => {
    if(err){
      res.status(400).send({message: err})
    }

    res.send(list)
  })
}

exports.createBloodPressure = (req, res, next) => {
  const question = new BloodPressure({
    answer: req.body.answer ? req.body.answer : {},
    patient: req.body.patient ? req.body.patient: '',
    date: new Date(),
  })

  question.save((err, question) => {
    if(err){
      res.status(500).send({message: err})
      return;
    }

    res.send({message: "question registered"})
  })
}

exports.createWellBeing = (req, res, next) => {
  const question = new WellBeing({
    answer: req.body.answer ? req.body.answer : '',
    patient: req.body.patient ? req.body.patient: '',
    date: new Date(),
  })

  question.save((err, question) => {
    if(err){
      res.status(500).send({message: err})
      return;
    }

    res.send({message: "question registered"})
  })
}
