// Generated by CoffeeScript 1.4.0
(function() {
  var MongoClient;

  MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    if (!err) {
      console.log('we are in');
    }
  });

  return;

}).call(this);