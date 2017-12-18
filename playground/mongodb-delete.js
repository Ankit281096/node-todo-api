//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
      return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'Ankit Sonkusare'}).then((result)=>{
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
      _id : new ObjectID('5a37c6028b9f634da3bc46c8')
    }).then((result)=>{
      console.log(JSON.stringify(result,undefined,2));
    });
    //db.close();
});
