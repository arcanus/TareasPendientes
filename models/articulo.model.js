var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticuloSchema = new Schema({
  descripcion: {type: String, required: true},
  fecha: {type: Date, required: true},
  activo: {type: Boolean, required: true},
});

module.exports = mongoose.model('Articulo', ArticuloSchema);
