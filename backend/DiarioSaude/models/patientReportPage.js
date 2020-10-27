const PatientReport = require('../models/patientReport.model.js');
const ReportPage = require('./reportPage.js')

class PatientReportPage extends ReportPage{

    static createPatientReport(){
        var patientReport = PatientReport.getReportByDate(req.reportDate)
        return patientReport;
    }

}

module.exports = PatientReportPage;