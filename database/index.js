const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/songs', {useNewUrlParser: true}, { useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB')
});

const songSchema = new mongoose.Schema({
    id: String,
    title: String,
    authors: String,
    copyright: String,
    tags: String
})

const Songs = mongoose.model('Songs', songSchema);

const getSongs = (cb) => {
    Songs.find()
      .then((response) => {
        cb(null, response)
      })
      .catch((err) => {
        cb(err)
      })
  }

const postSelection = (object, cb) => {
    Songs.create(object)
        .then((response) => {
            cb(null, response)
        })
        .catch((err) => {
            cb(err) 
        })
}

const deleteSong = (id, cb) => {
    Songs.findByIdAndDelete(id)
        .then((response) => {
            cb(null, response)
        })
        .catch((err) => {
            cb(err) 
        })
}

module.exports = {
    Songs: Photos,
    getSongs: getPhotos,
    postSelection: postPhotos,
    deleteSong: deletePhoto,
  };