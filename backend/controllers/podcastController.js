const Podcast = require('../models/Podcast');

// Get all podcasts
const getAllPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.find();
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch podcasts' });
    }
};

// Add new podcast
const addPodcast = async (req, res) => {
    try {
        const podcast = new Podcast(req.body);
        await podcast.save();
        res.status(201).json(podcast);
    } catch (error) {
        console.error(error);  // Affiche l'erreur dans la console du serveur
        res.status(400).json({ error: 'Failed to add podcast', message: error.message });
    }
};

module.exports = { getAllPodcasts, addPodcast };
