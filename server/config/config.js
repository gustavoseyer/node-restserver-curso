// ==============
// Puerto
//==============

process.env.PORT = process.env.PORT || 3000;

// ==============
// Entorno
//==============
process.env.Node_ENV = process.env.NODE_ENV || 'dev';

// ==============
// Base de datos
//==============

let urlDB;
if(process.env.Node_ENV === 'dev'){
    urlDB= 'mongodb://localhost:27017/cafe'
} else {
    urlDB='mongodb://cafe-user:polopolo00@ds123003.mlab.com:23003/cafe';
}

process.env.URLDB = urlDB;