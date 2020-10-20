const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Acesso à BD
const mongoose = require('mongoose');
let url = 'mongodb://root:DiarioSaude!@mongo:27017/diariosaude?authSource=admin';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//Routes
require('./routes/group.route')(app);
require('./routes/ubs.route')(app);

app.get('/', (req, res) => {
  res.json({"message": "API is online!"});
});


//Servidor
const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
