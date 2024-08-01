const mongoose = require("mongoose");

const EntitySchema = new mongoose.Schema({
    image: String,
    name: String,
});

const Entity = mongoose.model("Entity", EntitySchema);

module.exports = Entity;
