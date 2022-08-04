const express = require('express');
const ControladorEnvios = require('../controller/controladorEnvios');

const Router = express.Router();

Router.get('/', ControladorEnvios.index)
        .post('/', ControladorEnvios.registrar)
        .get('/:key/:value',ControladorEnvios.buscar,ControladorEnvios.mostrar)
        .delete('/:key/:value',ControladorEnvios.buscar,ControladorEnvios.eliminar)
        .put('/:key/:value',ControladorEnvios.buscar,ControladorEnvios.actualizar);

module.exports = Router;