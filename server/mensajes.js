const express = require('express');
const modelUsuario = require('./models/Usuario');
const mensaje = require('./models/Mensaje');

const router = express.Router();

router.post("/enviar", async (req, res) => {
    const {nombre, receptor, asunto, fecha, cuerpo, token} = req.body;

    const usuario = await modelUsuario.findOne({nombre}).exec();
    if (usuario.token != token) return res.status(400).send({mensaje: "Error de autenticación."});

    const usuarioReceptor = await modelUsuario.findOne({nombre: receptor}).exec();
    if (!usuarioReceptor) return res.status(400).send({mensaje: `El usuario ${receptor} no existe.`})

    usuarioReceptor.mensajes.push({emisor: nombre, asunto, fecha, cuerpo, leido: false});

    await usuarioReceptor.save();
    res.send({mensaje: "Exito"});
});

router.get("/obtener", async (req, res) => {
    const {nombre, token} = req.query;

    const usuario = await modelUsuario.findOne({nombre}).exec();
    if (usuario.token != token) return res.status(400).send({mensaje: "Error de autenticación."});

    res.send(usuario.mensajes.reverse());
});

router.get("/obtenerporid", async (req, res) => {
    const {nombre, token, _id} = req.query;

    const usuario = await modelUsuario.findOne({nombre}).exec();
    if (usuario.token != token) return res.status(400).send({mensaje: "Error de autenticación."});

    usuario.mensajes.id(_id).set({leido: true});
    await usuario.save();

    res.send(usuario.mensajes.id(_id));
});

router.delete("/borrarporid", async (req, res) => {
    const {nombre, token, _id} = req.query;

    const usuario = await modelUsuario.findOne({nombre}).exec();
    if (usuario.token != token) return res.status(400).send({mensaje: "Error de autenticación."});

    usuario.mensajes.id(_id).remove();
    await usuario.save();

    res.send({mensaje: "Exito"})
});

module.exports = router;
