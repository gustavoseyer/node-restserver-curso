require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const colors =require('colors');

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use( require('./routes/usuario'));

mongoose.connect(process.env.URLDB,(err,res) =>{
    if (err) throw err;
    console.log('Base de datos online'.green);
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando un Puerto: ', 3000);
});