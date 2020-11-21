const Form = require('../models/Form.model')

exports.create = (req, res, next) => {
  const form = new Form({
    groupid: req.body.group
  })

  form.save((err, form) => {
    if(err){
      res.status(500).send({message:err})
      return;
    }
    res.send({message: "Form created", id: form._id})
  })
}

exports.addQuestion = (req, res, next) => {
  Form.addQuestion({id: req.params.id, question_id: req.body.question_id}, (err, res_form) => {
      if(err){
        throw err
      }
      res.send(res_form)
    })
}

exports.getAll = (req, res) => {
  Form.find().exec((err, forms) => {
    if(err) res.json({status:400, message:"Could not get Forms"})

    res.json({status:200, form_list:forms})
  })
}
