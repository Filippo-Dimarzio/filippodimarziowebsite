const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         
    password: '',         
    database: 'contact_form',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Endpoint to handle form submissions
app.post('/submit-message', (req, res) => {
    const { name, email, message } = req.body;

    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err) => {
        if (err) return res.status(500).send({ success: false, error: err });
        res.status(201).send({ success: true, message: 'Message saved!' });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
