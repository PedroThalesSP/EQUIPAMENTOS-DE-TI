const express = require('express');
const mariadb = require('mariadb');
const cors = require("cors")
const app = express();
const bodyParser = require('body-parser')
const port = 3003;

app.use(cors())
app.use(express.json())

    app.listen(port, () => {
        console.log(`sevidor na porta: ${port}`)
    })

    const pool = mariadb.createPool({
        host:'localhost',
        user: 'root',
        password:'',
        database: 'equipamentos_de_ti'
    })  
    app.post('/api/submit', async (req, res) => {
        const { nome, preco } = req.body;
        console.log('Dados do formulário:', req.body);
    
        try {
            const conn = await pool.getConnection();
    
            await conn.query(
                "INSERT INTO equimantos (nome, value ) VALUES (name, value)",
                [nome, preco]
            );
    
            conn.release();
            res.status(200).json({ mensagem: 'Dados salvos no banco de dados' });
        } catch (err) {
            console.error("Erro ao inserir no banco de dados:", err);
            res.status(500).json({ erro: 'Erro ao salvar no banco de dados' });
        }
    });

    // app.post('/api/submit', (req,res) =>{
    //     const dadosQueVeioDoFormario = req.body
    //     console.log('Dados do formulario:', dadosQueVeioDoFormario)
    //     res.status(200).json({mensagem: 'dados recebidos com sucesso'})
    // })
