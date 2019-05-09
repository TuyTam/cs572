const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true });

const express = require('express');
const app = express();

// const client = new MongoClient('mongodb+srv://homework07:homework07@cs572-ikici.mongodb.net/test', {useNewUrlParser:true});

// //Initialation

let db = null;
let currentLong = -91.9665342;
let currentLat = 41.017654;

client.connect(function(err){
    db = client.db('homework08');
    
    
    console.dir("Done");
});
app.post("/restaurants", (req, res, next) => {
    const collection = db.collection('Restaurants'); 
    const newLoc = {
        "name": req.body.name,
        "location": req.body.location
    }
    collection.insert(newLoc);

})

app.get("restaurants/:name", (req,res,next) => {
    const collection = db.collection('Restaurants');
    if(typeof collection !== undefined){
        collection.find({name: req.params.name}).toArray(function(err,doc){
            if(err){
                console.log(err);
            }
            else{
                res.send(doc);
                res.end;
            }
        })
    }
})

app.listen(3000,()=> console.log("Listenging ..."))

