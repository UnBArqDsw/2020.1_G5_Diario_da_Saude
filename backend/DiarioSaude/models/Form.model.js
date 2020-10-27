const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Question = require('./Question.model')
const Group = require('./group.model')

const FormSchema = new Schema({
  questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
  groupId: {type: mongoose.Schema.Types.ObjectId, ref: 'Group',require:true}
})

class FormClass extends Question.QuestionClass{

  static addQuestion(form, callback){
    console.log("ID: ", form.id)
    console.log("QUESTION: ", form.question_id)
    
    this.update({_id:form.id}, { $addToSet: {questions: [form.question_id]}}, function(err, result) {
      if(err)throw err
      callback(err, result)
    })
  }

  static rmQuestion(form, callback){
    this.update({_id: form.id}, { $pullAll: {questions: [form.question_id]}}, (err, result) {
      if(err) throw err

      callback(err, result)
    })
  }
}

FormSchema.loadClass(FormClass);

module.exports = Question.QuestionModel.discriminator('Form', FormSchema);
