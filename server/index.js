const express = require('express');
const app = express();
const db = require('../database/index');
const bodyparser = require('body-parser');
// const getUserData = require('../database/index').getData;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post('/repos', (req, res) => {
  // console.log(req.body)
  // getReposByUsername(req.body.userHandle);
  // TODO - your code here!

});

app.get('/repos', (req, res)  => {
  // TODO - your code here!;
  // db.getData((data) =>
  // res.status(200).send(data)
  // )

});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});