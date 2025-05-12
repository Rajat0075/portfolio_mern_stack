const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/user";
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db('username');
    return db.collection('user');
}

module.exports = dbConnect;