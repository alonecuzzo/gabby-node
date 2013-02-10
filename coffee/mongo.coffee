MongoClient = require('mongodb').MongoClient

userId = 33
articleId = 393534

MongoClient.connect('mongodb://localhost:27017/gabby', (err, db) -> 
		return console.dir(err) if err
		# our code needs to go here for anything we need/want to do
		# we're going to need to store the user's id in their plist or something
		# we need to check and see if there's a userid that matches... if there is, use that user... if not, create a new one	
		usersCollection = db.collection('users')
		user = usersCollection.findOne({_id: userId}, (err, item) ->)
		if !user
			user = 
				_id: userId
				location: -1
			usersCollection.insert(user, (err, item) ->)

		articlesCollection = db.collection('articles')
		article = articlesCollection.findOne({_id: articleId}, (err, item) ->)
		if !article
			article = 
				_id: articleId
				chats: []
			articlesCollection.insert(article, (err, item) ->)
		return
)
return