var express = require('express');
var router = express.Router();
var Tarea = require('../models/tarea.model');

/* GET home page. */
router.get('/', function(req, res, next) {

  Tarea.find({activo: true},function(err, docs){
    if (err) {
      return res.send("Se ha producido un error...");
    }

    res.render('tareas', {tareas: docs});
  });
});

router.post('/tarea/add/', function(req, res, next){
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

module.exports = router;
