const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
Report = require('./report.model.js')

var groupReportSchema = new Schema({
  groupId: [{ type: Schema.Types.ObjectId, ref: "group" }]
});

class GroupReport extends Report.ReportClass {

  static getPatientReportByGroupId(groupId, callback){
    return this.findOne({groupId:groupId}, (err, report) => {
      if(err) throw err;

      callback(err, report)
    });
  }

}

groupReportSchema.loadClass(GroupReport);

module.exports = Report.ReportModel.discriminator('groupReport', groupReportSchema);
