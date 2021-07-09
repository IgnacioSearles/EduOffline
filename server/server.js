const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const usuarios = require("./usuarios");
const clases = require("./clases");

mongoose.connect("mongodb://localhost/eduoffline", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("./recursos"));

app.use("/usuarios", usuarios);
app.use("/clases", clases);

app.listen(5000, () => {
    console.log("Escuchando en el puerto 5000");
});