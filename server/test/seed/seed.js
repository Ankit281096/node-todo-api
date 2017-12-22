const {ObjectID}=require('mongodb');
const jwt=require('jsonwebtoken');

const {Todo}=require('./../../models/todo');
const {User}=require('./../../models/user');

const userOneId=new ObjectID();
const userTwoId=new ObjectID();
const users=[{
  _id:userOneId,
  email:'ankit@example.com',
  password:'userOnePass',
  tokens:[{
    access:'auth',
    token:jwt.sign({_id:userOneId,access:'auth'},'abc123').toString()
  }]
},{
  _id:userTwoId,
  email:'rajat@example.com',
  password:'userTwoPass'
}];

const todos = [{
  _id : new ObjectID(),
  text:'Sample todo test1'
},{
  _id : new ObjectID(),
  text:'Sample todo test2',
  completed:true,
  completedAt:333
}];

var populateTodos= (done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(() => done());
};

var populateUsers=(done)=>{
  User.remove({}).then(()=>{
    var userOne=new User(users[0]).save();
    var userTwo =new User(users[1]).save();

    return Promise.all([userOne,userTwo]);
  }).then(()=> done());
};

module.exports={todos,populateTodos,users,populateUsers};
