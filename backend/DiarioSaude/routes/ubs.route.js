module.exports = (app) => {
    const ubs = require('../controllers/ubs.controller.js');

    // Retrieve all ubss
    app.get('/ubs', ubs.findAll);

    // Retrieve a single ubs with ubsId
    app.get('/ubs/:ubsId', ubs.findOne);
}