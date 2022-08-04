const mongoose = require ("mongoose");

const AlmacenSchema = mongoose.Schema({
    numeroguia: {
        type: String,
        required: true
    },
    idalmacen: {
        type: String,
        required: true
    },
    idestante: {
        type: String,
        required: true
    },
    estatusalmacen: {
        type: String,
        required: true
    },
})

const Almacen = mongoose.model("Almacen", AlmacenSchema);
module.exports = Almacen;