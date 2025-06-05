const express = require('express');
const mariadb = require('mariadb');
const cors = require("cors")
const app = express();
const bodyParser = require('body-parser')
const port = 3001;

app.use(cors())

const pool = mariadb.createPool({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'equipamentos-da-ti'
})

app.use(express.json())
app.post('dados', (req,res) =>{
    console.log('dados recebidos', req.body)
    res.send('dados recebidos')

})


 app.listen(port, () => {
     console.log(`sevidor na ,${port}`)
 } )

pool.getConnection()
    .then(conn =>{
        console.log("conectado");
        conn.release()
    }) 
    .catch (err =>{
        console.log('erro ao conctar ao banco de dados',err)
})

app.get('/', (req,res)=>{
    res.send("back-end funcionado")
})
