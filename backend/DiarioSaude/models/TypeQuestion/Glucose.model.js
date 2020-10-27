const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Question = require('../Question.model')
const Patient = require('../patient.model')

const GlucoseSchema = new Schema({
  answer: {type: Number},
  patient: {type: Number, ref: Patient},
  date: {type:Date, require:true}
})

class GlucoseClass extends Question.QuestionClass{

  static getAnswer(cpf, callback){
    this.find({patient:cpf}, (err, answers) => {
      if(err) throw err;

      callback(err, answers)
    })
  }

  static setAnswer(glucose, callback){
    this.save({
      answer: glucose.answer,
      patient: glucose.cpf,
      type: "GLUCOSE",
      date: new Date()
    })

  }

} 

GlucoseSchema.loadClass(GlucoseClass);

module.exports = Question.QuestionModel.discriminator('Glucose', GlucoseSchema);
