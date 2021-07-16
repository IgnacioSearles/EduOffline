const { model, Schema } = require("mongoose");
const fuzzysearch = require("mongoose-fuzzy-search");

const schemaRecurso = new Schema({
    recurso: String
});

schemaRecurso.plugin(fuzzysearch, {fields: {recurso_tg: 'recurso'}});
const modelRecurso = new model("recursos", schemaRecurso);

module.exports = modelRecurso;