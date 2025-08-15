require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

// Conexão com o PostgreSQL
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

// Testar conexão
pool
  .connect()
  .then(() => console.log("Conectado ao PostgreSQL 🚀"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

// Rota: listar produtos
app.get("/produtos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produtos");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Rota: adicionar produto
app.post("/produtos", async (req, res) => {
  const { nome, preco, estoque } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO produtos (nome, preco, estoque) VALUES ($1, $2, $3) RETURNING *",
      [nome, preco, estoque]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
