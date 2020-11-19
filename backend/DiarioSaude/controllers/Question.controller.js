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
  if(Object.keys(req.body).length !== 0){
    const question = {
      answer: {
        diastolic: req.body.diastolic,
        systolic: req.body.systolic,
        patient_id: req.body.patient_id
      }
    }

    BloodPressure.setAnswer(question.answer, (err, question) => {
      if(err){
        res.status(500).send({message: err})
      }

      console.log(question)

      res.send({message: "Answer registered"})
    })
  }
  else{
    const question = new BloodPressure()
    console.log("ELSE CONTROLLER")
    question.save((err, question) => {
      if(err){
        res.status(500).send({message: err})
      }
      res.json({status:200, message:"Question registered", id_question: question._id})
    })
  }
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
