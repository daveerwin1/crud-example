const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let albums = new Schema({
  album_title: {
    type: String
  }
},{
    collection: 'albums'
});

module.exports = mongoose.model('albums', albums);