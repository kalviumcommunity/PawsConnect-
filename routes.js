const express = require('express');
const router = express.Router();
const Entity = require('./schema'); // Import the Mongoose model

// GET (Retrieve all animals)
router.get('/animals', async (req, res) => {
    try {
        const animals = await Entity.find({}); // Use Entity model instead of `collection`
        res.json(animals);
    } catch (error) {
        console.error('Error in GET animals request:', error);
        res.status(500).json({ message: error.message });
    }
});

// POST (Create a new entity)
router.post('/data', async (req, res) => {
    try {
        const newEntity = new Entity(req.body);
        const savedEntity = await newEntity.save();
        res.status(201).json(savedEntity);
    } catch (err) {
        console.error('Error in POST data request:', err);
        res.status(400).json({ error: 'Bad Request', details: err.message });
    }
});

router.put('/data/:id', async (req, res) => {
    try {
        const updatedEntity = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedEntity) {
            return res.status(404).json({ error: 'Entity not found' });
        }
        res.json(updatedEntity);
    } catch (err) {
        console.error('Error in PUT data request:', err);
        res.status(400).json({ error: 'Bad Request', details: err.message });
    }
});

module.exports = router;
