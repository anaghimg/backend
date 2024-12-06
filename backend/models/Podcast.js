const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    fileUrl: { type: String, required: true },
    duration: { type: Number, required: true },
});

module.exports = mongoose.model('Podcast', podcastSchema);
