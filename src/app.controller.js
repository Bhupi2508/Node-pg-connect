
// import pool object from db module that we just created
const { pool } = require("./db");

const helloWorld = (req, res) => {
    res.send("Hello world!");
};

const getData = async (req, res) => {
    try {
        // pool.query runs a query on the first available idle client and
        // return its result
        const result = await pool.query(`Select * from users`);
        res.send(result.rows);
    } catch (err) {
        console.error('Error executing query', err.stack)
        res.status(500).json({ error: 'Something went wrong' });
    }
};

const addData = async (req, res) => {
    try {
        const query = {
            text: "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            values: ["bhupi", "bhupi@gmail.com"], // Replace with your actual values
        };

        // add user if doesn't exist
        const result = await pool.query(query);
        res.send(result.rows);
    } catch (err) {
        console.error('Error executing query', err.stack)
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = { getData, addData, helloWorld };