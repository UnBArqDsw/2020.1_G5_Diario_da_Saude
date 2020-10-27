module.exports = (app) => {
  const hp = require('../controllers/healthProfessional.controller.js');
  const pt = require('../controllers/patient.controller')

  app.get('/hp/:cpf', hp.details);
  app.get('/hp/role/:wanted', hp.getByRole);

  app.get('/pt/:cpf', pt.details);

}
