const { Model } = require("mongoose");
const modeloUsuarios = require("../models/modeloUsuarios");

function index(req, res) {
    modeloUsuarios.find({})
    .then(usuarios => {
        if(usuarios.length) return res.status(200).send({usuarios});
        return res.status(204).send({message: "No hay usuarios registradas"});
    }).catch(e => res.status(500).send(e));
}

function registrar(req, res) {
    new modeloUsuarios(req.body).save()
    .then(usuarios => res.status(200).send({usuarios}))
    .catch(e => res.status(500).send({e}));
}

function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key]=req.params.value;
    modeloUsuarios.find(consulta).then(usuarios=>{
        if(!usuarios.length) return next();
        req.body.usuarios = usuarios;
        return next();
    }).catch(e =>{
        req.body.error=error;
        next ();
    })
}

function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.usuarios) return res.status(404).send({message:"No hay resultados"});
    let usuarios = req.body.usuarios;
    return res.status(200).send({usuarios});

}

function eliminar (req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.usuarios) return res.status(404).send({message:"No hay resultados"});
    req.body.usuarios[0].remove().then(usuariosElim =>{
        res.status(200).send({message:'Eliminado Correctamente', usuariosElim})
    }).catch(e => res.status(500).send({e}));
}

function actualizar (req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.usuarios) return res.status(404).send({message:"No hay resultados"});
    let usuariosObj = req.body.usuarios[0];
    usuariosObj = Object.assign(usuariosObj, req.body);
    usuariosObj.save().then(usuarios => {
        res.status(200).send({message: 'Actulizado correctamente', usuarios})
    }).catch(e => res.status(500).send({e}));
}

module.exports={
    index,
    registrar, 
    buscar, 
    mostrar,
    eliminar,
    actualizar
}