
const express = require('express'); 
const app = express();
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

