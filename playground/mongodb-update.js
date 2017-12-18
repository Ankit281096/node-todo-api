//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
      return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').findOneAndUpdate({
    //   _id:new ObjectID('5a37c1178b9f634da3bc44c6')
    // },{
    //   $set :{
    //     completed:true
    //   }
    // },{
    //   returnOriginal : false
    // }).then((results)=>{
    //   console.log(results);
    // });
    db.collection('Users').findOneAndUpdate({
      _id:new ObjectID('5a376913da603f25a09614b8')
    },{
      $set :{
        name:'Ankit Sonkusare'
      },
      $inc:{
        age: 1
      }
    },{
      returnOriginal : false
    }).then((results)=>{
      console.log(results);
    });
    //db.close();
});
