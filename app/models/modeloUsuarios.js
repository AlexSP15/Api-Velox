const mongoose = require ("mongoose");

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tipousuario: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    idusuario: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    fechanac: {
        type: String,
        required: true
    },
})

const Usuarios = mongoose.model("Usuarios", UsuariosSchema);
module.exports = Usuarios;