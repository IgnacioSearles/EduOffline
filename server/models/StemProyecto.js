const { Schema, model } = require("mongoose");

const schemaStemProyecto = new Schema({
    nombre: String,
    recursos: [String]
});

const modelStemProyecto = new model("stemdocs", schemaStemProyecto);

module.exports = modelStemProyecto;