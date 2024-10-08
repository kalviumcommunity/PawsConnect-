const express = require('express');
const router = express.Router();
const cors = require('cors'); 
const Entity = require('./schema'); 

router.use(express.json());
router.use(cors()); 


router.get('/data', async (req, res) => {
    try {
        const data = await Entity.find().maxTimeMS(20000).exec(); 
        res.json(data);
    } catch (err) {
        console.error('Error in GET data request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/add-data', async (req, res) => {
    try {
        console.log("Received request body:", req.body); 
        const newData = await Entity.create(req.body); 
        res.status(201).json(newData);
    } catch (err) {
        console.error('Error adding new data:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

module.exports = router;
