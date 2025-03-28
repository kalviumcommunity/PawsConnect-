const mongoose = require("mongoose");

// Define the schema, using 'image_url' to match the database field
const EntitySchema = new mongoose.Schema({
    image_url: String,  // Change from 'image' to 'image_url' to match your data
    name: String,
});


const Entity = mongoose.model("Entity", EntitySchema, "main-collections");

module.exports = Entity;
