module.exports = (app) => {
  const hp = require('../controllers/healthProfessional.controller.js');
  const pt = require('../controllers/patient.controller')

  app.get('/hp/:cpf', hp.details);
  app.post('/hp', hp.create);

  app.get('/pt/:cpf', pt.details);
  app.post('/pt', pt.create)

}
