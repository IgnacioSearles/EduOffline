const express = require("express");
const crypto = require("crypto");

const modelUsuario = require("./models/Usuario");

const router = express.Router();

router.post('/login', async (req, res) => {
    const { nombre, clave } = req.body;

    const usuario = await modelUsuario.findOne({ nombre: nombre }).exec();
    if (!usuario) return res.status(400).send({ mensaje: "Verificar nombre o clave." });

    if (!usuario.verificarClave(clave)) return res.status(400).send({ mensaje: "Verificar nombre o clave." });

    return res.send({ mensaje: "Exito", usuario: {nombre: usuario.nombre, id: usuario._id} })
});

router.post('/registrarse', async (req, res) => {
    const { nombre, clave } = req.body;

    if (nombre.length < 8) return res.status(400).send({mensaje: "Su nombre debe ser mayor a 10 caracteres."});
    if (clave.length < 8) return res.status(400).send({mensaje: "Su clave debe ser mayor a 10 caracteres."});

    try {
        const usuario = new modelUsuario({ nombre: nombre, clave: clave });
        const resultado = await usuario.save();
        res.send(resultado);
    } catch (e) {
        res.status(400).send({mensaje: "Error, asegúrese de que su nombre no este en uso."});
    }

});

module.exports = router;