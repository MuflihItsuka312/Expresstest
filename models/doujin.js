const mongoose = require('mongoose');

const DoujinSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true ,
 },
  tier: { 
  type: String, 
  required: true ,
  },
  description: {
    type: String,
    required: false ,
  },
  artist: {
    type: String,
    required: false,
  },
   genre :{        //select between normal ecchi hardcore-
    type: String, 
    required: false,
   },
   link :{
    type: String,  
    required: false,
  }, 
    image: {    
        type: String,
        required: false,
    },

    });
    // Create a User model based on the schema
  const User = mongoose.model('User', userSchema);
  // Define a schema for the User collection
  const userSchema = new mongoose.Schema({
  username: {
    type:string,
    required: true,
  },
  password:{
    type:string,
    required: true,
  }
  });

    module.exports = mongoose.model('doujin', DoujinSchema);