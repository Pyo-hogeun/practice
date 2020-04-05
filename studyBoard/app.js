const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

//board
app.get('/', (req, res)=>{
    res.render('list',{});
});
app.get('/contentView', (req, res)=>{
    res.render('contentView', {});
})


app.listen(8080, ()=>{
    console.log('서버가동중..')
});