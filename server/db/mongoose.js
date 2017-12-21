var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// let db={
//   localhost:'mongodb://localhost:27017/TodoApp',
//   mlab:'mongodb://<Ankit>:<Ankit>@ds115035.mlab.com:15035/todoappdeployment'
// };
//MONGODB_URI='mongodb://<Ankit>:<Ankit>@ds115035.mlab.com:15035/todoappdeployment'
mongoose.connect(process.env.MONGODB_URI);

module.exports={mongoose};
