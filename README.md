gabby-node
==========

This is the nodejs backend for our super app gabby which allows for realtime chat functionality in publications.

###API Endpoints

**/users**: returns json object of all of the users in the db

```json
[
        {
            _id: 33,
            location: -1
        },
        {
            _id: 21,
            location: -1
        },
        ...
]
```

**/users/id**: returns single user object, creates new user object if the current user id doesn't exist

```json
{
      _id: 21,
      location: -1
}
```

**/user-closed-app/id**: returns nothing, sets the user's location to -1 when the user closes the app

**/articles**: returns list of articles that we're keeping track of/ watching

```json
[
        {
            _id: 3935,
            chats: [ ]
        },
        {
            _id: 393534,
            chats: [ ]
        },
        ...
]
```

**/articles/articleId/userId**: sets the user's location to the specified article id, returns the article created

```json
{
    _id: 393534,
    chats: [ ]
}
```

**/users-in-article/articleId**: returns list of users that have the location that matches the articleId, so it returns all users currently viewing the specified articleId

```json
[
    {
    _id: 33,
    location: 3842
    },
    ...
]
```



###Data Model

```json
[ User: 
        {  
            id: 34,  
            location: 3482  //hearst article id
        }
]
```

```json
[ Article: 
        {  
            id: 3482,  
            chats: [
                        { 
                          userId: 34,
                          timeStamp: 3948378,
                          message: 'hey these shoes are great!'
                        },
                        { 
                          userId: 83,
                          timeStamp: 8983323,
                          message: 'i hate them...'
                        }
                        ...
                    ]
        }
]
```