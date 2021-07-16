const express = require('express');

const modelRecurso = require('./models/Recurso');

const router = express.Router();

router.get('/archivo', async (req, res) => {
    const busqueda = req.query.busqueda;
    const archivosSimilares = await modelRecurso.fuzzy(busqueda);
    res.send(archivosSimilares.sort((a, b) => {
        if (a.similarity > b.similarity) return -1;
        return 1;
    })); 
});

module.exports = router;