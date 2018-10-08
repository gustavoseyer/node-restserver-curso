// ==============
// Puerto
//==============

process.env.PORT = process.env.PORT || 3000;

// ==============
// Entorno
//==============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==============
// vencimiento de token
//60*60*24*30
//==============

process.env.CADUCIDAD = 60*60*24*30;

// ==============
// seed de verificacion
//==============


process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB= 'mongodb://localhost:27017/cafe'
} else {
    urlDB=process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ==============
// Google client id 
//==============
process.env.CLIENT_ID = process.env.CLIENT_ID || '260042886966-n1r3jlhlhamfqfsu0nnpbqf99rgtmcko.apps.googleusercontent.com';