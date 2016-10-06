var express = require('express');
var router = express.Router();
var Tarea = require('../models/tarea.model');

router.post('/add', function(req, res, next){
  var descripcion = req.body.descripcion;
  var  activo = true;

  var nuevaTarea = new Tarea({
    descripcion: descripcion,
    fecha: new Date(),
    activo: true
  });

  nuevaTarea.save(function(err, nuevaTarea){
    console.log("Se guardó la tarea!!!");
    res.redirect('/');
  });

});

router.post('/delete/:id', function(req, res, next){
  Tarea.update({_id: req.params.id}, {$set: {activo: false}}, function(){
    console.log("---> Se eliminó la tarea ID: " + req.params.id);
    res.redirect('/');
  });
});

module.exports = router;
