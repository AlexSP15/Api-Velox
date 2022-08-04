const mongoose = require ("mongoose");
const CONFIG = require("./config");

module.exports = {
    connection: null,
    con: function(){
        if(this.connection) return this.connection
        return mongoose.connect('mongodb+srv://velox-admin:velox123@velox.zd4ep.mongodb.net/?retryWrites=true&w=majority').then(conexion =>{
            this.connection = conexion;
            console.log("¡Conexión exitosa Atlas!")
        }) .catch(e => console.log(e));
    }
}