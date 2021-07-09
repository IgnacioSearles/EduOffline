const mongoose = require("mongoose");
const modelClase = require("./models/Clase");
const fs = require("fs");

mongoose.connect("mongodb://localhost/eduoffline", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//Agregar las clases a mongodb

modelClase.deleteMany({}).then(() => {
    fs.readdir('./recursos/clases/', (err, files) => {
        files.forEach((nombreMateria) => {
            fs.readdir(`./recursos/clases/${nombreMateria}/`, async (err, files) => {
                if (err) console.log(err);
                const materia = new modelClase({ nombre: nombreMateria, recursos: files });
                await materia.save();
            });
        });
    });
});

console.log("done");