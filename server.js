const express = require('express')
const mysql = require('mysql2')
const inquirer = require('inquirer')
const PORT = process.env.PORT|| 3001;

const app = express

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bass'

}, console.log('CONNECTED!'))



app.listen(PORT, () => console.log('3001 is open and listening!'))