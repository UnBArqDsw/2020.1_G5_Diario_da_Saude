const express = require('express');
const bodyParser = require('body-parser');
const config_db = require('./constants')
const db = require("./models")

const app = express();

//Acesso à BD
const mongoose = require('mongoose');
let url = `mongodb://root:DiarioSaude!@mongo:${config_db.PORT}/${config_db.DB}?authSource=admin`;
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
let db_connection = mongoose.connection;
db_connection.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//Routes
require('./routes/group.route')(app);
require('./routes/user.route')(app)
require('./routes/ubs.route')(app);
require('./routes/auth.route')(app);
require('./routes/Question.route')(app);
require('./routes/Form.route')(app);

app.get('/', (req, res) => {
  res.json({"message": "API is online!"});
});


//Servidor
const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

//Função inicial
const Role = db.Role;

function initial(){
  Role.estimatesDocumentCount((err, count) => {
    if(!err && count === 0){
      new Role({
        name: "patient"
      }).save(err => {
        if(err){
          console.log("error", err);
        }
        console.log("added 'patient' to roles collection");
      })

      new Role({
        name: "healthProfessional"
      }).save(err => {
        if(err){
          console.log("error", err);
        }
        console.log("added 'healthProfessional' to roles collection")
      })
    }
  })
}
