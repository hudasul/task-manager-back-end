const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
      },
    description: {
        type: String,
        required: true
      },    
    date: {
        type: Date,
        required: true
      },
    importance: {
        type: Boolean,
        required: true
    }  
    ,  
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project"
      }
})