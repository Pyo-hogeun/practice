require('dotenv').config();

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const Board = require('./models/board');
const mongoose = require('mongoose');
const moment = require('moment');
const script = require('script');
const port = process.env.port || 8080;
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

  
//board
app.get('/', (req, res)=>{
    res.redirect('/list?skip=0');
});
app.get('/list', (req, res)=>{
    Board.find()
        .sort({ createdAt: -1 })
        .limit(3)
        .then((boards) => {
            res.render('list', {
                content: boards,
                moment: moment
            })
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.get('/contentMore', (req, res)=>{
    console.log( );
    Board.find()
        .sort({ createdAt: -1 })
        .skip(Number(req.query.skip))
        .limit(3)
        .then((boards) => {
            console.log('더보기 조회성공');
            // console.log(boards);
            res.end(JSON.stringify({
                content: boards
            }))
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.get('/contentView/:content_id', (req, res)=>{
    let contentSet = {
        prevContent: "",
        nextContent: "",
        content: "",
        moment: moment
    }
    Board.findOne({contentid: Number(req.params.content_id)+1})
        .then((nextContent)=>{
            contentSet.nextContent = nextContent;
            return Board.findOne({contentid: Number(req.params.content_id)-1})
        })
        .then((prevContent)=>{
            contentSet.prevContent = prevContent;
            return Board.findOne({contentid: Number(req.params.content_id)})
        })
        .then((contentNow)=>{
            contentSet.content = contentNow;
            res.render('contentView', contentSet);
        })
        .catch((err)=>{
            console.log(err);
        }) 
});
app.get('/contentWrite', (req, res)=>{
    res.render('contentWrite', {});
});
app.get('/contentUpdate/:content_id', (req, res)=>{
    Board.find({contentid: req.params.content_id})
        .then((content)=>{
            console.log(content);
            res.render('contentUpdate', {
                content: content,
                moment: moment
            });
        })
});
app.post('/create', (req, res)=>{
    let tempid = 0;
    Board.find().sort({'contentid':-1}).limit(1)
        .then(function(result){
            if( result.length === 0 ){
                tempid = 1;
            } else {
                tempid = result[0].contentid+1;
            }
        })
        .then(()=>{
            let board = new Board({
                contentid: tempid,
                contenttitle: req.body.title,
                contenttext: req.body.contentText,
                contentauthor: req.body.author,
                contentdate: req.body.createdAt
            });
            board.save(function(err){
                if(err) return res.json({result: 0});
                const status = {
                    "status" : 200,
                    "redirect" : "/contentView/"+tempid
                }
                res.end(JSON.stringify(status));
            })
        })
        .catch((err)=>{console.log(err)});
});

app.post('/update/:content_id', (req, res)=>{
    Board.update({contentid: req.params.content_id}, { $set: {contenttext : req.body.contentText}})
    .then(()=>{
        const status = {
            "status" : 200,
            "redirect" : "/contentView/"+req.params.content_id
        }
        res.end(JSON.stringify(status));
    })
});

app.post('/contentDelete/:content_id', (req, res)=>{
    Board.deleteOne({ contentid : req.params.content_id})
    .then( result => {
        // if(!output.result.n) return res.status(404).json({ error: "book not found" });
        // console.log(`Deleted ${result.deletedCount} item.`);
        console.log(result);
        const status = {
            "status" : 200,
            "redirect" : "/list"
        }
        res.end(JSON.stringify(status));
    })
    .catch( err => console.error(`Delete failed with error: ${err}`))
});
app.listen(port, ()=>{
    console.log('서버가동중..')
});