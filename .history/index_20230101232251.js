const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const database = 'e-comm'

const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  return await db.collection('product');
//   let response = await collection.find({}).toArray()
//   console.log(response);


}   

// getData().then((res) => {
//     console.log(res.find().toArray().then((data) => {
//         console.log(data)
//     }))
// })

const main = () => {
    console.log("main function called")
}
console.log(getData());
