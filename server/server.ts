const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = 3003;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`sevidor na porta: ${port}`);
});

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "equipamentos_de_ti",
});

// envio
app.post("/api/submit", async (req, res) => {
  const { envioDeId, envioNome, envioUrl, envioPreco } = req.body;
  console.log(
    "Dados do formulário:",
    envioDeId,
    envioNome,
    envioUrl,
    envioPreco
  );

  try {
    const conn = await pool.getConnection();

    await conn.query(
      "INSERT INTO equimantos (id, name, image, value ) VALUES (?, ?, ?, ?)",
      [envioDeId, envioNome, envioUrl, envioPreco]
    );

    conn.release();
    res.status(200).json({ mensagem: "Dados salvos no banco de dados" });
  } catch (err) {
    console.error("Erro ao inserir no banco de dados:", err);
    res.status(500).json({ erro: "Erro ao salvar no banco de dados" });
  }
});

//manda dados para o fron-end
app.get("/api/dados", async (req, res) => {
  try {
    const dados = await pool.query("SELECT * FROM equimantos ");
    res.json(dados);
  } catch (erro) {
    res.status(500).json({ erro: "erro ao buscar dados" });
  }
});

// delete
app.post("/api/delete", async (req, res) => {
  const dadosDeExclusaoIdBackend = req.body;
  try {
    const conn = await pool.getConnection();
    await conn.query(
      "DELETE FROM equimantos WHERE id IN (?)", [dadosDeExclusaoIdBackend]
    )
    conn.release()
    res.status(200).json({mensagem: "Dados apagados com sucesso"})
  } catch(err){
    res.status(500).json({erro: "Erro ao apagar os dados"})
  }
})

// update
app.post("/api/modifica", async(req,res) => {
    const {
      name,
      image,
      value,
      id,
  } = req.body;
    try{
      const conn = await pool.getConnection();
      await conn.query(
        "UPDATE equimanto SET name = ?, image = ?, value = ? WHERE id = ?", 
        [name, image, value, id]
      )
      conn.release()
      res.status(200).json({mensage: "Dados modificados com sucesso"})
    } catch(erro){
      res.status(500).json({erro: "erro ao atualizar os itens"})
    }
})
