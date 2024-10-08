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


router.put('/update-data/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = await Entity.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(updatedData);
    } catch (err) {
        console.error('Error updating data:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});


router.delete('/delete-data/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedData = await Entity.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ message: 'Data successfully deleted', deletedData });
    } catch (err) {
        console.error('Error deleting data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
