require('dotenv').config();
const mongoose = require('mongoose');
const Story = require('./models/Story');
const Village = require('./models/Village');
const ImpactMetric = require('./models/ImpactMetric');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/roshni')
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error(err));

const seedData = async () => {
  try {
    // Clear existing
    await Story.deleteMany();
    await Village.deleteMany();
    await ImpactMetric.deleteMany();

    // Create Story
    await Story.create({
      childName: 'Priya',
      age: 12,
      storyLine: 'Priya, 12, walked 6km to school. Today, she codes.',
      image: '/images/hero_priya.png',
      isFeatured: true
    });

    // Create Impact Metrics
    await ImpactMetric.create({
      studentsReached: 2847,
      villagesTransformed: 14,
      womenTrained: 318
    });

    // Create Village
    await Village.create({
      name: 'Rampur',
      description: 'A village transformed by digital literacy.',
      beforeImage: '/images/village_before.png',
      afterImage: '/images/village_after.png',
      timeline: [
        { month: 'Jan', event: 'No electricity' },
        { month: 'Mar', event: 'Solar installed' },
        { month: 'Jun', event: 'Tablets added' },
        { month: 'Dec', event: 'Coding classes started' }
      ]
    });

    console.log('Data seeded successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
