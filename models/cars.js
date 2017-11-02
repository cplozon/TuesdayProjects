const mongoose = require('mongoose'),  
      Schema = mongoose.Schema;

// User Schema

const CarSchema = new Schema({  
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
   user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },

});

module.exports = mongoose.model('Car', CarSchema);