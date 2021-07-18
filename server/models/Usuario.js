const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const schemaUsuario = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    clave: {
        type: String,
        required: true
    },
    token: String,
    ultimosRecursosUsados: [String]
});

schemaUsuario.pre('save', function (next) {
    if (!this.isModified('clave')) return next();
    this.clave = bcrypt.hashSync(this.clave, 10);
    next();
});

schemaUsuario.methods.verificarClave = function (claveEnTexto) {
    return bcrypt.compareSync(claveEnTexto, this.clave);
}

const modelUsuario = new model("usuarios", schemaUsuario);

module.exports = modelUsuario;