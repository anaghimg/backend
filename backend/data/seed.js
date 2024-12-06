const mongoose = require('mongoose');
const Content = require('../models/Content');
const Podcast = require('../models/Podcast');
require('dotenv').config();

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB for seeding'))
    .catch(err => console.error('MongoDB connection error:', err));

const seedData = async () => {
    await Content.insertMany([
        { title: 'Le Cœur', description: 'Comparé aux courants marins', parallel: 'Coeur', details: 'Les courants marins transportent la chaleur et les nutriments...' },
        { title: 'Les Poumons', description: 'Comparé aux échanges gazeux de l’océan', parallel: 'Poumons', details: 'Les algues produisent une grande partie de l’oxygène...' },
    ]);

    await Podcast.insertMany([
        { title: 'Podcast 1', description: 'Introduction au parallèle corps-océan', fileUrl: '/audio/podcast1.mp3', duration: 300 },
    ]);

    console.log('Data seeded successfully');
    mongoose.connection.close();
};

seedData();
