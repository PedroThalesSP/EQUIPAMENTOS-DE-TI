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

    app.post('/api/submit', async (req,res) => {
        const nome = req.body.nome;
        const preco = req.body.preco;
        // const imagem = req.file ? req.file.filename: null;

        try{
            const conn = await pool.getConnection()
        

        await conn.query(
            [nome, preco,]
        );

        conn.release();
           res.status(200).json({ mensage: 'Dados salvos no banco de dados'});
        } catch(err){
            console.log("Erro ao inserir o banco de dados", err);
            res.status(500).json({erro: ' Erro ao slavar o banco de dados'});
        }
    });
