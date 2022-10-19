const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, requiired: true },
  image: { type: String, requiired: true },
  address: { type: String, requiired: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },

  //user's id who added this place document will be added here
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Place', placeSchema);
