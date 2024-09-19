// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World'); 
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "equipments"  //MySQL database
});

app.get('/',(req, res) => {
    res.send('Hello World by Express!')
});

app.get('/equipmentlist',(req, res) => {
    pool.query("SELECT * FROM equipmentlist", function(error, results, fields){
        if (error) throw error;

        res.json(results);
    });
});

app.get('/equipmenttype',(req, res) => {
    pool.query("SELECT * FROM equipmenttype", function(error, results, fields){
        if (error) throw error;

        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});