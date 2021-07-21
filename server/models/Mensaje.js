const {Schema, model} = require("mongoose");

const schemaMensaje = new Schema({
    emisor: String,
    asunto: String,
    fecha: String,
    cuerpo: String,
    leido: Boolean
});

module.exports = schemaMensaje;