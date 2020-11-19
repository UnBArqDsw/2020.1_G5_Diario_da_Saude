const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Question = require('../Question.model')
const Patient = require('../patient.model')

const BloodPressureSchema = new Schema({
  answer: {type: [{diastolic: Number, systolic:Number, patient_id: {type: mongoose.ObjectId, ref:Patient},date: {type:Date, require:true}}], default:[]},
  
})

class BloodPressureClass extends Question.QuestionClass{
  getAnswerByPatient(cpf, callback){
    this.find({patient:cpf}, (err, answers) => {
      if(err) throw err;

      callback(err, answer)
    })
  }

  static createQuestion(){
    this.create(function (err){
      if(err) res.json({status:500,message:"Could not create"})

    })
  }

  static setAnswer(bloodPressure, callback){
    console.log("PELO AMOR DE DEUS")
      const answer = {
        diastolic: bloodPressure.diastolic,
        systolic: bloodPressure.systolic,
        patient_id: bloodPressure.patient_id,
        date: new Date()
      }
      console.log(answer)
      this.findByIdAndUpdate(bloodPressure.question_id,
        { $push: {"answer": answer}}, {upsert:true}, 
        (err, question) => {
          if(err) res.json({status:403, message:"Could not update"})
          callback(err, question)
      })
  }

} 

BloodPressureSchema.loadClass(BloodPressureClass);

module.exports = Question.QuestionModel.discriminator('BloodPressure', BloodPressureSchema);
