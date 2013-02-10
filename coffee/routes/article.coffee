#delcartion of variables
MongoClient = require('mongodb').MongoClient

dbURL = 'mongodb://localhost:27017/gabby'

#user methods
exports.list = (req, res) ->
	# res.send('response')
	responseJSON = ''
	MongoClient.connect(dbURL, (err, db) ->
		return console.dir(err) if err
		articlesCollection = db.collection('articles')
		responseJSON = articlesCollection.find().toArray((err, results) ->
			res.send(JSON.stringify(results))
			return
			)
		# res.send(JSON.stringify(responseJSON))
		return
		)
	return

exports.listArticle = (req, res) ->
	articleId = parseInt(req.params.articleId)
	userId = parseInt(req.params.userId)
	MongoClient.connect(dbURL, (err, db) ->
		return console.dir(err) if err
		articlesCollection = db.collection('articles')
		article = articlesCollection.findOne({_id: articleId}, (err, item) ->
			return console.dir(err) if err
			if item
				usersCollection = db.collection('users')
				usersCollection.update({_id: userId}, {location: articleId}, (err, item) ->)
				res.send(JSON.stringify(item))
				return
			else
				newArticle = 
					_id: articleId
					chats: []
				articlesCollection.insert(newArticle, (err, item) ->
					return console.dir(err) if err
					usersCollection = db.collection('users')
					usersCollection.update({_id: userId}, {location: articleId}, (err, item) ->)
					res.send(JSON.stringify(item))
					return
					)
				return
			)
		return
		)