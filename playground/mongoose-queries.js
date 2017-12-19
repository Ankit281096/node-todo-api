const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

var userId='5a37e77f942cc817d0293b4a';
// var id = '5a38ce0802716e26ec395e20'
//
// Todo.find({
//   _id : id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });
User.findById(userId).then((user)=>{
  if (!user){
    return console.log('User not found');
  }
  console.log('User by ID :',user);
}).catch((e)=> console.log(e));
