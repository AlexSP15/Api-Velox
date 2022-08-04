const mongoose = require("mongoose");

const EnviosSchema = mongoose.Schema({
  numeroguia: {
    type: String,
    required: true,
  },
  tipopaquete: {
    type: String,
    required: true,
  },
  tipoenvio: {
    type: String,
    required: true,
  },
  estatusenvio: {
    type: String,
    required: true,
  },
  servicioEntrega:[ {
    personarecibe: {
      type: String,
      required: true,
    },
    telefonorecibe: {
      type: String,
      required: true,
    },
    nota: {
      type: String,
      required: true,
    },
  }],
  remitente:[ {
    nombreremitente: {
      type: String,
      required: true,
    },
    direccionremitente: {
      type: String,
      required: true,
    },
    cpremitente: {
      type: String,
      required: true,
    },
    ciudadremitente: {
      type: String,
      required: true,
    },
    municipioremitente: {
      type: String,
      required: true,
    },
    estadoremitente: {
      type: String,
      required: true,
    },
    emailremitente: {
      type: String,
      required: true,
    },
    telefonoremitente: {
      type: String,
      required: true,
    },
  }],
  destinatario:[ {
    nombredestinatario: {
      type: String,
      required: true,
    },
    direcciondestinatario: {
      type: String,
      required: true,
    },
    cpdestinatario: {
      type: String,
      required: true,
    },
    ciudaddestinatario: {
      type: String,
      required: true,
    },
    municipiodestinatario: {
      type: String,
      required: true,
    },
    estadodestinatario: {
      type: String,
      required: true,
    },
    emaildestinatario: {
      type: String,
      required: true,
    },
    telefonodestinatario: {
      type: String,
      required: true,
    },
    referencia: {
      type: String,
      required: true,
    },
  }],
});

const Envios = mongoose.model("Envios", EnviosSchema);
module.exports = Envios;
