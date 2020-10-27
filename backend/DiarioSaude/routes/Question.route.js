module.exports = (app) => {
  const Question = require('../controllers/Question.controller')
  
  app.post('/question/glucose', Question.createGlucose);
  app.get('/question/glucose', Question.getGlucose);

  app.post('/question/bloodpressure', Question.createBloodPressure);

  app.post('/question/wellbeing', Question.createWellBeing);
}
