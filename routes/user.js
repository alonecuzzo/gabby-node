// Generated by CoffeeScript 1.4.0
(function() {
  var MongoClient, dbURL;

  MongoClient = require('mongodb').MongoClient;

  dbURL = 'mongodb://localhost:27017/gabby';

  exports.list = function(req, res) {
    var responseJSON;
    responseJSON = '';
    MongoClient.connect(dbURL, function(err, db) {
      var usersCollection;
      if (err) {
        return console.dir(err);
      }
      usersCollection = db.collection('users');
      responseJSON = usersCollection.find().toArray(function(err, results) {
        res.send(JSON.stringify(results));
      });
    });
  };

  exports.listUser = function(req, res) {
    var id;
    id = parseInt(req.params.id);
    return MongoClient.connect(dbURL, function(err, db) {
      var user, usersCollection;
      if (err) {
        return console.dir(err);
      }
      usersCollection = db.collection('users');
      user = usersCollection.findOne({
        _id: id
      }, function(err, item) {
        var highestId, highestUser;
        if (err) {
          return console.dir(err);
        }
        if (item) {
          res.send(JSON.stringify(item));
        } else {
          highestId = -1;
          highestUser = usersCollection.find().sort({
            _id: -1
          }).limit(1).toArray(function(err, results) {
            var newUser;
            if (err) {
              return console.dir(err);
            }
            highestId = results[0]._id + 1;
            newUser = {
              _id: highestId,
              location: -1
            };
            usersCollection.insert(newUser, function(err, results) {
              if (err) {
                return console.dir(err);
              }
              res.send(JSON.stringify(results[0]));
            });
          });
        }
      });
    });
  };

  exports.userClosedApp = function(req, res) {
    var userId;
    userId = parseInt(req.params.id);
    return MongoClient.connect(dbURL, function(err, db) {
      var usersCollection;
      if (err) {
        return console.dir(err);
      }
      usersCollection = db.collection('users');
      usersCollection.update({
        _id: userId
      }, {
        location: -1
      }, function(err, results) {
        res.send(JSON.stringify(results));
      });
    });
  };

  exports.usersInArticle = function(req, res) {
    var articleId;
    articleId = parseInt(req.params.articleId);
    return MongoClient.connect(dbURL, function(err, db) {
      var usersCollection;
      if (err) {
        return console.dir(err);
      }
      usersCollection = db.collection('users');
      usersCollection.find({
        location: articleId
      }).toArray(function(err, results) {
        res.send(JSON.stringify(results));
      });
    });
  };

}).call(this);
