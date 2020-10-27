const GroupReport = require('../models/groupReport.model.js');
const ReportPage = require('./reportPage.js')

class GroupReportPage extends ReportPage{

    static createPatientReport(cpf){
        var groupReport = GroupReport.getPatientReportByCPF(cpf)
        return groupReport;
    }

}

module.exports = GroupReportPage;