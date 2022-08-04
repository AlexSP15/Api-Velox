const express = require('express');
const ControladorAlmacen = require('../controller/controladorAlmacen');

const Router = express.Router();

Router.get('/', ControladorAlmacen.index)
        .post('/', ControladorAlmacen.registrar)
        .get('/:key/:value',ControladorAlmacen.buscar,ControladorAlmacen.mostrar)
        .delete('/:key/:value',ControladorAlmacen.buscar,ControladorAlmacen.eliminar)
        .put('/:key/:value',ControladorAlmacen.buscar,ControladorAlmacen.actualizar);

module.exports = Router;