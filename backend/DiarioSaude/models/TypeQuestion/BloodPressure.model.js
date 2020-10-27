const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Question = require('../Question.model')
const Patient = require('../patient.model')

const BloodPressureSchema = new Schema({
  answer: {type: {diastolic: Number, systolic:Number}},
  patient: {type: Number, ref: Patient},
  date: {type:Date, require:true}
})

class BloodPressureClass extends Question.QuestionClass{
  getAnswerByPatient(cpf, callback){
    this.find({patient:cpf}, (err, answers) => {
      if(err) throw err;

      callback(err, answer)
    })
  }

  static setAnswer(glucose, callback){
    this.save({
      answer: glucose.answer,
      patient: glucose.cpf,
      date: new Date()
    })

  }

} 

BloodPressureSchema.loadClass(BloodPressureClass);

module.exports = Question.QuestionModel.discriminator('BloodPressure', BloodPressureSchema);
