MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/test', (err, db) -> 
		console.log 'we are in' if !err
		return
	)
	return