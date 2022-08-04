const { Model } = require("mongoose");
const modeloEnvios = require("../models/modeloEnvios");

function index(req, res) {
    modeloEnvios.find({})
    .then(envios => {
        if(envios.length) return res.status(200).send({envios});
        return res.status(204).send({message: "No hay envios registradas"});
    }).catch(e => res.status(500).send(e));
}

function registrar(req, res) {
    new modeloEnvios(req.body).save()
    .then(envios => res.status(200).send({envios}))
    .catch(e => res.status(500).send({e}));
}

function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key]=req.params.value;
    modeloEnvios.find(consulta).then(envios=>{
        if(!envios.length) return next();
        req.body.envios = envios;
        return next();
    }).catch(e =>{
        req.body.error=error;
        next ();
    })
}

function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.envios) return res.status(404).send({message:"No hay resultados"});
    let envios = req.body.envios;
    return res.status(200).send({envios});

}

function eliminar (req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.envios) return res.status(404).send({message:"No hay resultados"});
    req.body.envios[0].remove().then(enviosElim =>{
        res.status(200).send({message:'Eliminado Correctamente', enviosElim})
    }).catch(e => res.status(500).send({e}));
}

function actualizar (req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.envios) return res.status(404).send({message:"No hay resultados"});
    let enviosObj = req.body.envios[0];
    enviosObj = Object.assign(enviosObj, req.body);
    enviosObj.save().then(envios => {
        res.status(200).send({message: 'Actulizado correctamente', envios})
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