const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb+srv://tam:tam@cluster0-qyohr.mongodb.net/test', {useNewUrlParser:true});

const express = require('express');
const app = express();

// const client = new MongoClient('mongodb+srv://homework07:homework07@cs572-ikici.mongodb.net/test', {useNewUrlParser:true});

// //Initialation

let db = null;

client.connect(function(err){
    db = client.db('homework07');
    //const collection = db.collection('lectures');
  
    console.dir("Done");
});

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Welcome to Student Courses app");
});

app.get('/api/lectures', (req,res, next) => {
    const collection = db.collection('MyCollection');
    if(typeof collection !== undefined){
        collection.find({}).toArray(function(err,doc){
            if(err){
                console.log(err);
            }
            else{
                res.send(doc);
                res.end;
            }
        })
    }
});

app.get('/api/lectures/:course', (req,res, next) => {
    const collection = db.collection('MyCollection');
    if(typeof collection !== undefined){
        collection.find({course: req.params.course}).toArray(function(err,doc){
            if(err){
                console.log(err);
            }
            else{
                res.send(doc);
                res.end;
            }
        })
    }
});

app.post('/api/lectures', (req,res, next) => {
    const collection = db.collection('MyCollection');
    const newEntry = {course: req.body.course, lecture: req.body.lecture};

    collection.insertOne(newEntry, function(err, doc){
        if(err){
            console.log(err);
        }
        else{
            res.send(doc);
            res.end;
        }
    })

});

const port = process.env.port || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));

{
    Book :{ISBN, author, tag},
    Author: {id, name},
    Student: (id, name),
    CheckoutRecord: (id, List<Book>, returnDate)
}


