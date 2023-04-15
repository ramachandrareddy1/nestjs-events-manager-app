const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: String,
    location: String,
    date: {
        type: Date,
        default: Date.now()
    },
    image: String,
    isFeatured: {
      type: Boolean,
      default: false
    }
  });
  
module.exports = mongoose.model('events', eventSchema)
