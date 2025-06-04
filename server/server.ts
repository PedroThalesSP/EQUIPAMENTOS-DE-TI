// const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.get('/', function (req, res){
    res.send('<p> testando o back-end </p>')
})

app.listen(3001, function(){
    console.log("teste o back-end")
})