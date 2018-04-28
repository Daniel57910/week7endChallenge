const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'sample_db';

MongoClient.connect(url, function (err, client) {
  const db = client.db(dbName);
  console.log(db);
  const collection = db.collection('documents');
  insertDocuments(collection);
  findDocuments(collection); 
  updateDocs(collection);
  deleteDocs(collection);
  client.close();
});

function insertDocuments(collection) {
  console.log(collection);
  insertMany(collection);
}

function insertMany(collection) {
  collection.insertMany([{ a: "daioncdon" }, { b: "cwubwcibc"}, {c: "cquibqbiuc"} ], function (err, result) { console.log(result);});
}

function findDocuments(collection) {
  collection.find({'b': 'learning'}).toArray(function(err, result) { console.log(result); });
}

function updateDocs(collection) {
  collection.updateMany({b: 'learning'}, {$set: {b: 'deleting'}}, function(err, result){ console.log(result); });
}

function deleteDocs(collection) {
  collection.deleteMany({b: 'deleting'}, function(err, result) { console.log(result); });
}