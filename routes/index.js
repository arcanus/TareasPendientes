var express = require('express');
var router = express.Router();
var Tarea = require('../models/tarea.model');

/* GET home page. */
router.get('/', function(req, res, next) {

  Tarea.aggregate(
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

    res.render('tareas', {tareas: docs});
  });

});

module.exports = router;
