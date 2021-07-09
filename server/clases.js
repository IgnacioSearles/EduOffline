const express = require('express');

const modelClase = require('./models/Clase');

const router = express.Router();

router.get("/materias", async (req, res) => {
    const materias = await modelClase.find({}, "-_id nombre").exec();
    res.send(materias);
});

router.get("/videos", async (req, res) => {
    const materiaABuscar = req.query.materia;
    const materia = await modelClase.findOne({nombre: materiaABuscar}).exec();
    res.send(materia.recursos);
});

module.exports = router;