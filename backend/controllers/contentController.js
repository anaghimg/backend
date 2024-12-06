const Content = require('../models/Content');

// Get all content
const getAllContent = async (req, res) => {
    try {
        const contents = await Content.find();
        res.status(200).json(contents);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch content' });
    }
};

// Add new content
const addContent = async (req, res) => {
    try {
        const content = new Content(req.body);
        await content.save();
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add content' });
    }
};

module.exports = { getAllContent, addContent };
