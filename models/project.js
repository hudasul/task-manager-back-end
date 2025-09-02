const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
})

const project = model('project', projectSchema)
module.exports = project