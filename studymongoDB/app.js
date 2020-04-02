// // ENV
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require("mongoose");

const port = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/'));
// app.use(app.router);
// routes.initialize(app);

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
app.get('/', (req, res)=>{
  res.render('home');
})
app.use('/todos', require('./routes/todos'));

app.listen(port, ()=>{
  console.log('서버가동');
  console.log(port);
})