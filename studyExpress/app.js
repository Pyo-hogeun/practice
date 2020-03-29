const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.get("/", (req, res) => {
    console.log("홈으로");
    res.render("home",{});
});
app.get("/intro", (req, res) => {
    console.log("소개페이지로");
    fs.readFile("/assets/intro-text.txt")
    res.render("intro",{});
});
app.get("/gallery", (req, res) => {
    console.log("갤러리로");
    res.render("gallery",{});
});
app.post("/postEditIntro", (req, res) => {
    console.log(req.body.content);
    fs.writeFile('assets/intro-text.txt', req.body.content , (err) => {
        if( err ) throw err;
        console.log("저장완료");

    });
    res.redirect(req.get('referer'));
    
    // res.json({ok: true});
})

app.listen(8080, () => {
    console.log("서버가동중");
})