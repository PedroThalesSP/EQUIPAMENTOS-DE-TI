const express = require('express');
const mariadb = require('mariadb');
const cors = require("cors")
const app = express();
const bodyParser = require('body-parser')
const port = 3001;

app.use(cors())
app.use(express.json())

    app.listen(port, () => {
        console.log(`sevidor na porta: ${port}`)
    })

    const pool = mariadb.createPool({
        host:'localhost',
        user: 'root',
        password:'',
        database: 'equipamentos-da-ti'
    })  

    app.post('/api/submit', (req,res) =>{
        const dadosQueVeioDoFormario = req.body
        console.log('Dados do formulario:', dadosQueVeioDoFormario)
        res.status(200).json({mensagem: 'dados recebidos com sucesso'})
    })
