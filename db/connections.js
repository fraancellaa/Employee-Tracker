const mysql = require('mysql2');

// connect to database

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fr4nc3ll4',
    database: 'employees'
},
console.log('Connected to the employees database.')
);