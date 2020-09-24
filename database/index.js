const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scheduler')
  .then(() => console.log('connected to mongoDB'))
  .catch((err) => console.log('Error connecting to the DB: ', err));

// Get the default connection
const db = mongoose.connection;

const userSchema = mongoose.Schema({
  // userId: { type: Number, unique: true },
  name: String,
  phone: String,
  email: { type: String, unique: true },
  tourType: String,
  interestProprties: [],
  finInterest: Boolean,
  scheduledDate: Date,
  joinedDate: Date,
  contactedAgents: [],
  // owner: {login_handle : {type: String}, login_id : {type: Number}, url: {type: String}}
});

const agentSchema = mongoose.Schema({
  agentId: { type: Number, unique: true },
  name: String,
  picture: String,
  phone: String,
  email: String,
  agentType: String,
  proprtyIds: [],
  recSalesCount: Number,
  avgRating: Number,
  ratingCount: Number,
});

const User = mongoose.model('User', userSchema);
const Agent = mongoose.model('Agent', agentSchema);

const saveAgentData = (data) => {
  const agentData = new Agent(data);
  agentData.save((err, res) => {
  // agentData.update({upsert: true}, (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log(res);
    }
  });

  // Repo.findOne({repo_Id: data.repo_Id}, (err , example) => {
  //   if (err) console.log(err);
  //   if (example) {
  //     console.log('already saved')
  //   } else {
  //     console.log(data)
  //     var repoData = new Repo(data);
  //     repoData.save()
  //   }
  // })
};

const saveUserData = (data) => {
  const userData = new User(data);
  // userData.update({upsert: true}, (err, res) => {
  userData.save((err, res) => {
    if (err) {
      throw err;
    } else {
      console.log(res);
    }
  });
};

const getAgentData = (callback) => {
  console.log(1);
  Agent.find({}, function (err, docs) {}).sort({ avgRating: -1 }).limit(4)
  .then((data) => callback(data));

};

module.exports.saveAgentData = saveAgentData;
module.exports.saveUserData = saveUserData;
module.exports.getAgentData = getAgentData;
