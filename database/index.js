const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/scheduler')
.then(() => console.log('connected to mongoDB'))
.catch(err => console.log('Error connecting to the DB: ', err))

// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// //Get the default connection
var db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repo_Id: Number,
  name: String,
  url: String,
  owner: {login_handle : {type: String}, login_id : {type: Number}, url: {type: String}},
  created_At: Date,
  upDated_At: Date,
  watch_Count: Number,
  forks_Count: Number,
  repo_Score: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let saveData = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // console.log(data)
  // var repoData = new Repo(data);
  // repoData.save()
  Repo.findOne({repo_Id: data.repo_Id}, (err , example) => {
    if (err) console.log(err);
    if (example) {
      console.log('already saved')
    } else {
      console.log(data)
      var repoData = new Repo(data);
      repoData.save()
    }
  })

}

let getData = (callback) => {
  // console.log(1);
  Repo.find({}, function (err, docs) {}).sort({repo_Score: -1}).limit(25)
  // Repo.find({}).sort({repo_Score: 1}).limit(25);
  .then((data) => callback(data));

}

module.exports.saveData = saveData;
module.exports.getData = getData;
