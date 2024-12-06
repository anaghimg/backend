const express = require('express');
const { getAllPodcasts, addPodcast } = require('../controllers/podcastController');
const router = express.Router();

router.get('/', getAllPodcasts);
router.post('/', addPodcast);

module.exports = router;
