var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'equipments'
});

connection.connect();

connection.query('SELECT * FROM equipmentlist', function(error, results, fields) {
    if (error) throw error;

    console.log(results);
});

connection.end();