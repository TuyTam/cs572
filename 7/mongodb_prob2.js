const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb+srv://tam:tam@cluster0-qyohr.mongodb.net/test', {useNewUrlParser:true});


client.connect(function(err){
    const db = client.db('homework07');
    const collection = db.collection('lectures');
    collection.findOne({}, function(err, doc){
        console.log(doc.course);
        console.log(doc.lecture);
        client.close();
    });
    console.dir("Done");
});

