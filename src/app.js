const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

// import pool object from db module that we just created
const { pool } = require("./db");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// async-await pattern for get callback argument
app.get("/users", async (req, res) => {
  try {
    // pool.query runs a query on the first available idle client and
    // return its result
    const result = await pool.query(`Select * from users`);
    res.send(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack)
    res.status(500).json({ error: 'Something went wrong'});
  }
});

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`));