const express = require('express');

const modelStemProyecto = require('./models/StemProyecto');

const router = express.Router();

router.get("/proyectos", async (req, res) => {
    const proyectos = await modelStemProyecto.find({}, "-_id nombre").exec();
    res.send(proyectos);
});

router.get("/recursos", async (req, res) => {
    const proyectoABuscar = req.query.proyecto;
    const proyecto = await modelStemProyecto.findOne({nombre: proyectoABuscar}).exec();
    res.send(proyecto.recursos);
});

module.exports = router;