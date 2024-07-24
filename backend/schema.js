const mongoose = require("mongoose");
const EntitySchema = new mongoose.Schema({
    image: String,
    name: String,
 });
  
  const Entity = mongoose.model("User-collections", EntitySchema);