const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  reportDate: {type: Date, required: true},
  reportDescription: {type: String, required: true},
});


class ReportClass{

  static getReportById(_id, callback){
    return this.findOne({_id:_id}, (err, report) => {
      if(err) throw err;

      callback(err, report)
    });
  }
  
}

ReportSchema.loadClass(ReportClass)

const ReportModel = mongoose.model('report', ReportSchema)
  
module.exports = {ReportClass, ReportSchema, ReportModel}