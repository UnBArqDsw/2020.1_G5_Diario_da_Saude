const express = require('express');
const bodyParser = require('body-parser');

// Importa Routes
const users = require('./routes/user.route');
const app = express();

//Acesso à BD
const mongoose = require('mongoose');
let url = 'mongodb://root:DiarioSaude!@mongo:27017/diariosaude?authSource=admin';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', users);

//Servidor
const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
