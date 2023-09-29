const { Pool } = require("pg");
const path = require("path");
require("dotenv").config({ debug: true });

// Pool inicial para a criação do banco de dados
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "postgres",
});

// Scripts do banco de dados
const createDbScript = "CREATE DATABASE db_login_system";
const createTBScript = `CREATE TABLE IF NOT EXISTS "users" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(55) UNIQUE NOT NULL,
    "password" VARCHAR(100) NOT NULL
);`;

// Função que cria o banco de dados e a tabela do projeto (utilizando verificações de existência)
const startDatabase = async () => {
  try {
    // Script de verificação da existência do banco de dados
    let dataBaseVerify = await pool.query(
      "SELECT datname FROM pg_catalog.pg_database WHERE LOWER(pg_database.datname) = LOWER('db_login_system')"
    );

    if (dataBaseVerify.rows.length === 0) {
      await pool.query(createDbScript);
      console.info("Database created successfully");
    }

    // Pool principal, que se conecta ao banco de dados de usuários
    const mainPool = new Pool({
      user: "postgres",
      password: "postgres",
      host: "localhost",
      port: 5432,
      database: "db_login_system",
    });

    // Script de verificação da existência da tabela 'users'
    let tableVerify = await mainPool.query(
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE LOWER(TABLE_NAME) = LOWER('users')"
    );

    if (tableVerify.rows.length === 0) {
      await mainPool.query(createTBScript);
      console.info("Table created successfully");
    }
  } catch (error) {
    console.error("Error", error);
  }
};

startDatabase();

module.exports = { pool, startDatabase };
