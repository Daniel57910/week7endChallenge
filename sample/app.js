const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'w6_test';
let LoginInfo = require('./controllers/loginController.js');
const app = express();

function connectToDatabase() {
  MongoClient.connect(url, function (err, client) {
    const db = client.db(dbName);
    const collection = db.collection('test_collection');
    client.close();
  });
}

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send('test routing');
});                                                                                                                                                              



app.listen(9000, () => console.log('Example app listening on port 9000!'));