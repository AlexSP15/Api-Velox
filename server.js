const app = require ('./app/app');
const CONFIG = require('./app/config/config');
const conexion = require("./app/config/conexion");
const connection = require('./app/config/connection');
const mongoose = require('mongoose');

//conexion.conect();
connection.con();

app.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    console.log(`Servidor en el puerto ${CONFIG.PORT}`)
})