const mongoose = require("mongoose");

const schema = mongoose.Schema;

// Category Schema
const categorySchema = new schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

    
    blocked: {
      type: Boolean,
      default: false
    
  },
  date_time: {
    type: Date,
    default: Date.now,
  },
 
});

const Category = (module.exports = mongoose.model("Category", categorySchema));
