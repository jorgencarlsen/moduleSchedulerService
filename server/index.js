const express = require('express');

const app = express();
const bodyparser = require('body-parser');
const { saveUserData, getAgentData } = require('../database/index');
// const saveAgentdData = require('../database/index').saveAgentdData;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post('/api/userschedule', (req, res) => {
  // console.log(req.body)
  saveUserData(req.body);
  res.status(200).send('added user');
});

app.get('/api/agentInfo', (req, res) => {
  // TODO - your code here!;
  getAgentData((data) => res.status(200).send(data));
});

app.put('/api/userschedule', (req, res) => {
  // console.log(req.body)
  // saveUserData(req.body);
  // res.status(200).send();
});

app.patch('/api/userschedule', (req, res) => {

});

app.delete('/api/userschedule', (req, res) => {

});

app.put('/api/agentInfo', (req, res) => {
  // TODO - your code here!;
  // getAgentData((data) => res.status(200).send(data));
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
