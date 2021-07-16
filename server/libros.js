const express = require("express");
const modelLibro = require("./models/Libro");

const router = express.Router();

router.get("/archivos", async (req, res) => {
    const libros = await modelLibro.find({});
    res.send(libros);
});

module.exports = router;