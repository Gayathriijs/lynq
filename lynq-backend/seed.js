// backend/seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tool = require('./models/tool'); // Ensure the path is correct

dotenv.config();

const seedData = [
  {
    name: 'Figma',
    description: 'A collaborative interface design tool.',
    category: 'Design',
    platform: ['Web', 'Desktop'],
    url: 'https://www.figma.com/',
    rank: 1
  },
  {
    name: 'Visual Studio Code',
    description: 'A powerful source-code editor made by Microsoft.',
    category: 'Development',
    platform: ['Desktop'],
    url: 'https://code.visualstudio.com/',
    rank: 1
  },
  {
    name: 'DaVinci Resolve',
    description: 'Professional video editing software.',
    category: 'Video Editing',
    platform: ['Desktop'],
    url: 'https://www.blackmagicdesign.com/products/davinciresolve/',
    rank: 2
  },
  {
    name: 'Midjourney',
    description: 'An AI art generator.',
    category: 'AI Tools',
    platform: ['Web', 'Discord'],
    url: 'https://www.midjourney.com/',
    rank: 1
  },
  {
    name: 'Canva',
    description: 'An online graphic design tool with a drag-and-drop interface.',
    category: 'Design',
    platform: ['Web', 'App'],
    url: 'https://www.canva.com/',
    rank: 3
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected for seeding.');

    await Tool.deleteMany({});
    await Tool.insertMany(seedData);
    console.log('Database seeded with tools!');

    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
}

seedDB();