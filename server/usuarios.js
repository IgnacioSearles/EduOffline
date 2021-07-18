const express = require("express");
const crypto = require("crypto");

const modelUsuario = require("./models/Usuario");

const router = express.Router();

router.post('/ingresar', async (req, res) => {
    const { nombre, clave } = req.body;

    const usuario = await modelUsuario.findOne({ nombre: nombre }).exec();
    if (!usuario) return res.status(400).send({ mensaje: "Verificar nombre o clave." });

    if (!usuario.verificarClave(clave)) return res.status(400).send({ mensaje: "Verificar nombre o clave." });

    const token = crypto.randomBytes(16).toString('hex');
    usuario.set({token: token});
    await usuario.save();

    return res.send({ mensaje: "Exito", usuario: {nombre: usuario.nombre, id: usuario._id, token: token} })
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
        res.status(400).send({mensaje: "Error, asegúrese de que su nombre no esté en uso."});
    }
});

router.post('/ultimos', async (req, res) => {
    const {nombre, token, recurso} = req.body;

    const usuario = await modelUsuario.findOne({nombre}).exec();
    if (usuario.token != token) return res.status(400).send({mensaje: "Error de autenticación."});

    let ultimosRecursosUsados = usuario.ultimosRecursosUsados;
    if (!ultimosRecursosUsados.includes(recurso)) ultimosRecursosUsados.push(recurso);
    if (ultimosRecursosUsados.length > 3) ultimosRecursosUsados.shift();

    usuario.set({ultimosRecursosUsados});
    await usuario.save();

    res.send({mensaje: "Exito"});
})

router.get('/ultimos', async (req, res) => {
    const {nombre, token} = req.query;

    const usuario = await modelUsuario.findOne({nombre}).exec();
    if (usuario.token != token) return res.status(400).send({mensaje: "Error de autenticación."});

    res.send(usuario.ultimosRecursosUsados);
})

module.exports = router;