const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const usuarios = require("./usuarios");
const clases = require("./clases");
const recursos = require("./recursos");
const libros = require("./libros");
const info = require("./info");
const mensajes = require("./mensajes");
const stem = require("./stem");

mongoose.connect("mongodb://localhost/eduoffline", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", express.static("./build"));
app.use("/archivos", express.static("./recursos"));

app.use("/usuarios", usuarios);
app.use("/clases", clases);
app.use("/recursos", recursos);
app.use("/proyectos", stem);
app.use("/libros", libros);
app.use("/info", info);
app.use("/mensajes", mensajes);

app.listen(5000, () => {
    console.log("Escuchando en el puerto 5000");
});