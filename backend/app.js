require('dotenv').config();  // Chargement des variables d'environnement
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importer les routes
const contentRoutes = require('./routes/contentRoutes');
const podcastRoutes = require('./routes/podcastRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Permet d'autoriser les requêtes provenant d'autres domaines
app.use(express.json());  // Pour pouvoir lire les requêtes JSON

// Définir les routes
app.use('/api/content', contentRoutes);
app.use('/api/podcasts', podcastRoutes);

// Connexion à MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))  // Connexion réussie
    .catch(err => console.error('MongoDB connection error:', err));  // En cas d'erreur de connexion

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
