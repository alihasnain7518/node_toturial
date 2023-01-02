const { MongoClient } = require("mongodb");

const url = "mongo://localhost:27017";

const client = new MongoClient(url);

const database = 'e-comm'
async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('product');
  console.log(collection.find({}.toArray()));

  
}
