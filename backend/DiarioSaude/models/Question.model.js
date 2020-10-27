const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

})

class QuestionClass{

  static getAnswer(){}

  setAnswer(){};

}

QuestionSchema.loadClass(QuestionClass)

const QuestionModel = mongoose.model('Question', QuestionSchema);

module.exports = {QuestionModel, QuestionClass} 
