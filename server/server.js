const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static("./static"));

app.listen(5000, () => {
    console.log("Escuchando en el puerto 5000");
});