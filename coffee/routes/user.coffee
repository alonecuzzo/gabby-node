#delcartion of variables
MongoClient = require('mongodb').MongoClient

dbURL = 'mongodb://localhost:27017/gabby'

#user methods
exports.list = (req, res) ->
	# res.send('response')
	responseJSON = ''
	MongoClient.connect(dbURL, (err, db) ->
		return console.dir(err) if err
		usersCollection = db.collection('users')
		responseJSON = usersCollection.find().toArray((err, results) ->
			res.send(JSON.stringify(results))
			return
			)
		# res.send(JSON.stringify(responseJSON))
		return
		)
	return

exports.listUser = (req, res) ->
	id = parseInt(req.params.id)
	MongoClient.connect(dbURL, (err, db) ->
		return console.dir(err) if err
		usersCollection = db.collection('users')
		user = usersCollection.findOne({_id: id}, (err, item) ->
			return console.dir(err) if err
			if item
				res.send(JSON.stringify(item))
				return
			else
				highestId = -1
				highestUser = usersCollection.find().sort({_id: -1}).limit(1).toArray((err, results) ->
					return console.dir(err) if err
					highestId = results[0]._id + 1
					newUser =
						_id: highestId
						location: -1
					usersCollection.insert(newUser, (err, results) ->
						return console.dir(err) if err
						res.send(JSON.stringify(results[0]))
						return
						)
					return
					)
				return
			)
		return
		)

exports.userClosedApp = (req, res) ->
	userId = parseInt(req.params.id)
	MongoClient.connect(dbURL, (err, db) ->
		return console.dir(err) if err
		usersCollection = db.collection('users')
		usersCollection.update({_id: userId}, {location: -1}, (err, results) ->
			res.send(JSON.stringify(results))
			return
			)
		return
		)

exports.usersInArticle = (req, res) ->
	articleId = parseInt(req.params.articleId)
	MongoClient.connect(dbURL, (err, db) ->
		return console.dir(err) if err
		usersCollection = db.collection('users')
		usersCollection.find({location: articleId}).toArray((err, results) ->
			res.send(JSON.stringify(results))
			return
			)
		return
		)