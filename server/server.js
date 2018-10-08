require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const colors =require('colors');
const path =require('path');

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//habilitar ña carpeta public 
app.use(express.static(path.resolve(__dirname , '../public')));

//configuracion gobla de rutas
app.use( require('./routes/index'));


mongoose.connect(process.env.URLDB,(err,res) =>{
    if (err) throw err;
    console.log('Base de datos online'.green);
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando un Puerto: ', 3000);
});