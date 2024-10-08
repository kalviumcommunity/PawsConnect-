const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Entity = mongoose.model('Entity', dataSchema, 'main-collections');

module.exports = Entity;
