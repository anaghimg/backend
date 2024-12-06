const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    parallel: { type: String, required: true }, // Exemple : "Coeur" ou "Poumons"
    details: { type: String, required: true }, // Explication scientifique détaillée
});

module.exports = mongoose.model('Content', contentSchema);
