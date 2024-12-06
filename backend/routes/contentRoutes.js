const express = require('express');
const { getAllContent, addContent } = require('../controllers/contentController');
const router = express.Router();

router.get('/', getAllContent);
router.post('/', addContent);

module.exports = router;
