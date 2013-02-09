gabby-node
==========

This is the nodejs backend for our super app gabby which allows for realtime chat functionality in publications.

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