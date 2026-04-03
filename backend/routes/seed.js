const express = require('express');
const router = express.Router();
const Story = require('../models/Story');
const Village = require('../models/Village');
const ImpactMetric = require('../models/ImpactMetric');

router.get('/', async (req, res) => {
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

        res.send('<h1 style="font-family: sans-serif; text-align: center; margin-top: 20%; color: #00838f;">Database Seeded Successfully! 🎉<br><span style="font-size: 1rem; color: gray;">You can close this window and refresh your website now!</span></h1>');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error seeding database: ' + err.message);
    }
});

module.exports = router;
