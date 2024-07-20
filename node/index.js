const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
  port: 3306,
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');

  const createTable = `CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )`;

  connection.query(createTable, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Table created or already exists');
    // Populate table with data if it's empty
    populateTableIfEmpty();
  });
});

function populateTableIfEmpty() {
  // Check if the table is empty
  const checkIfEmpty = 'SELECT COUNT(*) AS count FROM people';
  connection.query(checkIfEmpty, (err, results) => {
    if (err) {
      console.error('Error checking if table is empty:', err);
      return;
    }
    if (results[0].count === 0) {
      // Table is empty, insert 5 random names
      const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
      const sql = 'INSERT INTO people (name) VALUES ?';
      const values = names.map((name) => [name]);
      connection.query(sql, [values], (err, results) => {
        if (err) {
          console.error('Error inserting initial data:', err);
          return;
        }
        console.log('Inserted 5 random names into the table');
      });
    }
  });
}

app.post('/people', (req, res) => {
  const { name } = req.body;
  const sql = 'INSERT INTO people (name) VALUES (?)';
  connection.query(sql, [name], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.status(201).send(`Person added with ID: ${results.insertId}`);
  });
});

app.get('/people', (req, res) => {
  const sql = 'SELECT * FROM people';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.status(200).json(results);
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle</h1>');
});

app.listen(port, () => {
  console.log('Running on port ' + port);
});
