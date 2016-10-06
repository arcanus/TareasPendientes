var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TareaSchema = new Schema({
  descripcion: {type: String, required: true},
  fecha: {type: Date, required: true},
  activo: {type: Boolean, required: true},
});

module.exports = mongoose.model('Tarea', TareaSchema);
