var express = require('express');
var router = express.Router();
var Articulo = require('../models/articulo.model');

//GET Articulos
router.get('/', function(req, res, next) {

  Articulo.aggregate(
    [{"$match": {"activo": true}},
      {$sort: {fecha: -1}},
      {"$project":
        {
          "fecha": {"$dateToString": {"format":"%Y-%m-%d", "date": "$fecha"}},
          "descripcion": "$descripcion"
        }
      }
    ], function(err, docs){
    if(err) {
      res.send("Error....");
    }

    res.render('articulos', {articulos: docs});
  });

});

//Add new article
router.post('/add', function(req, res, next){
  var descripcion = req.body.descripcion;
  var  activo = true;

  var nuevoArticulo = new Articulo({
    descripcion: descripcion,
    fecha: new Date(),
    activo: true
  });

  nuevoArticulo.save(function(err, nuevaTarea){
    console.log("Se guardó el artículo!!!");
    res.redirect('/articulos');
  });

});

//Delete an article
router.post('/delete/:id', function(req, res, next){
  Articulo.update({_id: req.params.id}, {$set: {activo: false}}, function(){
    console.log("---> Se eliminó artículo ID: " + req.params.id);
    res.redirect('/articulos');
  });
});
module.exports = router;
