const express = require('express');
const app = express();
const albumsRoutes = express.Router();

// Require Album model in our routes module
let Album = require('../models/albums');

// Defined store route
albumsRoutes.route('/add').post(function (req, res) {
  let album = new Album(req.body);
  album.save()
    .then(game => {
    res.status(200).json({'album': 'Album in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
albumsRoutes.route('/').get(function (req, res) {
    Album.find(function (err, title){
    if(err){
      console.log(err);
    }
    else {
      res.json(title);
    }
  });
});

// Defined edit route
albumsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Album.findById(id, function (err, album){
      res.json(album);
  });
});

//  Defined update route
albumsRoutes.route('/update/:id').post(function (req, res) {
    Album.findById(req.params.id, function(err, album) {
    if (!album)
      return next(new Error('Could not load Document'));
    else {
        album.album_title = req.body.album_title;

        album.save().then(album => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
albumsRoutes.route('/delete/:id').get(function (req, res) {
    Album.findByIdAndRemove({_id: req.params.id}, function(err, album){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = albumsRoutes;