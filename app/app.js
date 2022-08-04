const express = require('express');
const rutaAlmacen = require('./routes/rutaAlmacen')
const rutaEnvios = require('./routes/rutaEnvios')
const rutaUsuarios = require('./routes/rutaUsuarios')
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/almacen', rutaAlmacen)
app.use('/envios', rutaEnvios)
app.use('/usuarios', rutaUsuarios)

module.exports = app;