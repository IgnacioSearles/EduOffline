const express = require("express");

const modelClase = require("./models/Clase");
const modelRecurso = require("./models/Recurso");
const modelLibro = require("./models/Libro");
const modelStemProyecto = require("./models/StemProyecto");

const router = express.Router();

router.get("/cantidades", async (req, res) => {
    const cantidadRecursos = await modelRecurso.countDocuments({});
    const cantidadLibros = await modelLibro.countDocuments({});
    const cantidadProyectos = await modelStemProyecto.countDocuments({});

    let cantidadClases = 0;
    const clases = await modelClase.find({}).exec();
    clases.forEach(clase => cantidadClases += clase.recursos.length);

    res.send({cantidadRecursos, cantidadLibros, cantidadClases, cantidadProyectos});
});

module.exports = router;