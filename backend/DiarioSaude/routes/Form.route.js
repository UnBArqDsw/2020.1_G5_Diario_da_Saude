module.exports = (app) => {
  const Form = require('../controllers/Form.controller')

  app.post('/form', Form.create)
  app.post('/form/:id', Form.addQuestion)
  app.get('/form', Form.getAll)
 
}
