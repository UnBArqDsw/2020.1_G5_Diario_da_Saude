const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Question = require('../Question.model')
const Patient = require('../patient.model')

const WellBeingSchema = new Schema({
  answer: {type: String, enum:["Y", "N", ""]},
  patient: {type: Number, ref: Patient},
  date: {type:Date, require:true}
})

class WellBeingClass extends Question.QuestionClass{
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

WellBeingSchema.loadClass(WellBeingClass);

module.exports = Question.QuestionModel.discriminator('WellBeing', WellBeingSchema);
