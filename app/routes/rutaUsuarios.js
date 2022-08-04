const express = require('express');
const ControladorUsuarios = require('../controller/controladorUsuarios');

const Router = express.Router();

Router.get('/', ControladorUsuarios.index)
        .post('/', ControladorUsuarios.registrar)
        .get('/:key/:value',ControladorUsuarios.buscar,ControladorUsuarios.mostrar)
        .delete('/:key/:value',ControladorUsuarios.buscar,ControladorUsuarios.eliminar)
        .put('/:key/:value',ControladorUsuarios.buscar,ControladorUsuarios.actualizar);

module.exports = Router;