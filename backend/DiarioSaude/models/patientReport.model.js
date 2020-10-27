const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
Report = require('./report.model.js')

var patientReportSchema = new Schema({
  cpf:{type: Number, required: true}
});

class PatientReport extends Report.ReportClass {

  static getPatientReportByCPF(cpf, callback){
    return this.findOne({cpf:cpf}, (err, report) => {
      if(err) throw err;

      callback(err, report)
    });
  }

}

patientReportSchema.loadClass(PatientReport);

module.exports = Report.ReportModel.discriminator('patientReport', patientReportSchema);