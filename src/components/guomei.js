var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sc',
    password: '123',
    database: 'sun1802'
});

connection.connect();

connection.query('SELECT * FROM guomei', function(error, results, fields) {
    if(error) throw error;
    console.log(results);
});
connection.end();
