module.exports = (app) => {
  const hp = require('../controllers/healthProfessional.controller.js');

  app.get('/hp/:id', hp.details);
  app.post('/hp', hp.create);

}
