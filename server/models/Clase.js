const { Schema, model } = require("mongoose");

const schemaClase = new Schema({
    nombre: String,
    recursos: [String]
});

const modelClase = new model("clases", schemaClase);

module.exports = modelClase;