const express = require('express');
const mariadb = require('mariadb');
const cors = require("cors")
const app = express();
const bodyParser = require('body-parser')
const PORT = 3001;

const pool = mariadb.createPool({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'equipamentos-da-ti'
})

pool.getConnection()
    .then(conn =>{
        console.log("conectado");
        conn.release()
    }) 
    .catch (err =>{
        console.log('erro ao conctar ao banco de dados',err)
})
    