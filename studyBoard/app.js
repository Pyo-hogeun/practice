require('dotenv').config();

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const Board = require('./models/board');
const mongoose = require('mongoose');
const moment = require('moment');
const port = process.env.port || 8080;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

//board
app.get('/', (req, res)=>{
    res.render('list',{});
});
app.get('/list', (req, res)=>{
    Board.find(function(err, boards){
        if(err) return res.json({result: 0});
        res.render('list', boards);
    })
});
app.get('/contentView', (req, res)=>{
    res.render('contentView', {});
});
app.get('/contentWrite', (req, res)=>{
    res.render('contentWrite', {});
});
app.get('/contentUpdate', (req, res)=>{
    res.render('contentUpdate', {});
});
app.post('/create', (req, res)=>{
    console.log(req.body.author);
    let board = new Board({
        contenttitle: req.body.title,
        contenttext: req.body.contentText,
        contentauthor: req.body.author,
    });
    console.log(board);
    board.save(function(err){
        if(err) return res.json({result: 0});
        const status = {
            "status" : 200,
            "redirect" : "/contentView"
        }
        res.end(JSON.stringify(status));
    })
});

app.listen(port, ()=>{
    console.log('서버가동중..')
});