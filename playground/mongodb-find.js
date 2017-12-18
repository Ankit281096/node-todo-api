//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
      return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find().count().then((count)=>{
    //   console.log(`Todos Count ${count}`);
    // },(err)=>{
    //   console.log('Unable to fetch todos',err);
    // });
    //db.close();

    db.collection('Users').find({name:'Ankit Sonkusare'}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('Unable to fetch data from Users');
    });
});
