const {Schema, model} = require('mongoose');

const schemaLibro = new Schema({
    nombre: String
});

const modelLibro = new model("libros", schemaLibro);

module.exports = modelLibro;