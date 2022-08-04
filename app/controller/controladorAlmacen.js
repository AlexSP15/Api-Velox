const { Model } = require("mongoose");
const modeloAlmacen = require("../models/modeloAlmacen");

function index(req, res) {
    modeloAlmacen.find({})
    .then(almacen => {
        if(almacen.length) return res.status(200).send({almacen});
        return res.status(204).send({message: "No hay almacen registradas"});
    }).catch(e => res.status(500).send(e));
}

function registrar(req, res) {
    new modeloAlmacen(req.body).save()
    .then(almacen => res.status(200).send({almacen}))
    .catch(e => res.status(500).send({e}));
}

function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key]=req.params.value;
    modeloAlmacen.find(consulta).then(almacen=>{
        if(!almacen.length) return next();
        req.body.almacen = almacen;
        return next();
    }).catch(e =>{
        req.body.error=error;
        next ();
    })
}

function mostrar(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.almacen) return res.status(404).send({message:"No hay resultados"});
    let almacen = req.body.almacen;
    return res.status(200).send({almacen});

}

function eliminar (req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.almacen) return res.status(404).send({message:"No hay resultados"});
    req.body.almacen[0].remove().then(almacenElim =>{
        res.status(200).send({message:'Eliminado Correctamente', almacenElim})
    }).catch(e => res.status(500).send({e}));
}

function actualizar (req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.almacen) return res.status(404).send({message:"No hay resultados"});
    let almacenObj = req.body.almacen[0];
    almacenObj = Object.assign(almacenObj, req.body);
    almacenObj.save().then(almacen => {
        res.status(200).send({message: 'Actulizado correctamente', almacen})
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