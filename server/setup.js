const mongoose = require("mongoose");
const modelClase = require("./models/Clase");
const modelRecurso = require("./models/Recurso");
const modelLibro = require("./models/Libro");
const modelStemProyecto = require("./models/StemProyecto");
const fs = require("fs");

mongoose.connect("mongodb://localhost/eduoffline", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

console.log("Agregando nombre de archivos a la db...");

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
    console.log("-Clases agregadas a la db");
});

//Agregar proyectos STEM a mongodb
modelStemProyecto.deleteMany({}).then(() => {
    fs.readdir('./recursos/proyectos/', (err, files) => {
        files.forEach((nombreProyecto) => {
            fs.readdir(`./recursos/proyectos/${nombreProyecto}/`, async (err, files) => {
                if (err) console.log(err);
                const proyecto = new modelStemProyecto({ nombre: nombreProyecto, recursos: files });
                await proyecto.save();
            });
        });
    });
    console.log("-Proyectos agregados a la db");
});

//Agregar los recursos a mongodb
modelRecurso.deleteMany({}).then(() => {
    fs.readdir('./recursos/recursos/', (err, files) => {
        files.forEach(async (recurso) => {
            const nuevoRecurso = new modelRecurso({recurso: recurso});
            await nuevoRecurso.save();
        });
    });
    console.log("-Recursos agregados a la db");
});

//Agregar los libros a mongodb
modelLibro.deleteMany({}).then(() => {
    fs.readdir('./recursos/libros/', (err, files) => {
        files.forEach(async (libro) => {
            const nuevoLibro = new modelLibro({nombre: libro});
            await nuevoLibro.save();
        });
    });
    console.log("-Libros agregados a la db");
});
