
require('dotenv').config();
const express = require('express'); 
const app = express();
const mysql = require('mysql');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.url);
  next();
});

// Serve static files from this folder so form.html is reachable at /form.html
app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.send("Hello world!");
});

const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

conn.connect((err) => {
  if (err) {
    console.error('DB connection error:', err && err.message ? err.message : err);
    return;
  }
  console.log("Connected to database");
});

app.post('/insert', function(req, res){
  const sql = "INSERT INTO Users (Username, Password, Email) VALUES (?, ?, ?)";
  console.log('Insert request body:', req.body);

  conn.query(sql,
    [req.body.username, req.body.password, req.body.email],
    function (err, results) {
      if (err) {
        console.error('Insert error:', err && err.message ? err.message : err);
        return res.status(500).send('Database error while inserting account');
      }
      console.log('Insert results:', results);
      res.send("New account has been created!");
    }
  );
})

app.get('/forgot', function(req, res) {
  res.send(`
      <form action="/retrieve" method="post">
          Enter your email: 
          <input type="text" name="email" maxlength="20"><br>
          <button type="submit">Retrieve Password</button>
      </form>
  `);
});

app.post('/retrieve', function(req, res) {
  const sql = "SELECT Username, Password FROM Users WHERE Email = ?";
  console.log('Retrieve request body:', req.body);
  conn.query(sql, [req.body.email], function(err, results) {
    if (err) {
      console.error('Retrieve error:', err && err.message ? err.message : err);
      return res.status(500).send('Database error while retrieving account');
    }

    console.log('Retrieve results:', results);
    if (results && results.length > 0) {
      const user = results[0];
      res.send(`Username: ${user.Username} <br> Password: ${user.Password}`);
    } else {
      res.send("Email not found in the database.");
    }
  });
});

app.listen(8080, () => console.log("Server running on Port 8080"));