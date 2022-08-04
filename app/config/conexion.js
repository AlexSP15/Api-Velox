const mongoose = require ("mongoose");
const CONFIG = require("./config");

module.exports = {
    connection: null,
    conect: function(){
        if(this.connection) return this.connection
        return mongoose.connect(CONFIG.DB).then(conexion =>{
            this.connection = conexion;
            console.log("¡Conexión exitosa!")
        }) .catch(e => console.log(e));
    }
}
