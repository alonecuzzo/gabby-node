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
			res.send(results)
			return
			)
		# res.send(JSON.stringify(responseJSON))
		return
		)
	return
