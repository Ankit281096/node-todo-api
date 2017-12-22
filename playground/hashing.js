const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt =require('bcryptjs');


var password='it@123';

// bcrypt.genSalt(10,(err,salt)=>{
//   bcrypt.hash(password,salt,(err,hash)=>{
//     console.log(hash);
//   })
// });

bcrypt.compare(password,'$2a$10$iXnyQfbZSY4ay7pyJNfEPOsi/bwtWQSqbLXvi2mdJGvKEuSnFNnEe',(err,res)=>{
  console.log(res);
});
// var data ={
//   id:10
// };
//
// var token=jwt.sign(data,'123abc');
// console.log(token);
// var message ='I am user number 3';
// var hash = SHA256(message).toString();
// // var hhash= SHA256(message).toHexString();
//
// console.log('message :',message);
// console.log('hash :',hash);
// // console.log('hhash :',hhash);
//
// var data={
//   id:4
// };
// var token={
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// var resultHash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
// if (resultHash === token.hash){
//   console.log('Data was not changed');
// }else{
//   console.log('Data was changed .Do not trust');
// }
