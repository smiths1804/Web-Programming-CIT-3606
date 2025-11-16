
const express = require('express'); 
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(8080);

require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/Insert', function(req, res){
  const sql = "INSERT INTO Users (Username, Password, Email) VALUES (?, ?, ?)";

    conn.query(sql, 
        [req.body.username, req.body.password, req.body.email], 
        function (err, result) {
            if (err) throw err;
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
  conn.query(sql, [req.body.email], function(err, results) {
      if (err) throw err;

      if (results.length > 0) {
          const user = results[0];
          res.send(`Username: ${user.Username} <br> Password: ${user.Password}`);
      } else {
          res.send("Email not found in the database.");
      }
  });
});

