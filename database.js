var mongodb= require('mongodb');
var MongoClient= mongodb.MongoClient;
var URL = 'mongodb://127.0.0.1:27017/users';

MongoClient.connect(URL,function(err,db){
    if(!err){
        var collection = db.collection('users');
        /*collection.insertOne({
            firstName : 'Waleed',
            lastName : 'Ahmad',
            age : 23
        }, function(err, results){
            if(err){
                console.log(err);
            }else{
                console.log(results);
            }
        })*/

        collection.find({firstName : 'Waleed'}).toArray(function(err, users){
            if(err){
                console.log(err);
            }else{
                console.log(users);
            }
        });
    }
    else{
        console.log(err);
    }
});