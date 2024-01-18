const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function createDatabase() {
  try {
    await client.connect();
    const db = client.db('studentDetails');
    console.log(`Database '${db.databaseName}' created`);
    const collection = db.collection('details');
    const students = [
      { "firstName": "Alice", "lastName": "Smith", "rollNumber": 12345 },
      { "firstName": "Bob", "lastName": "Johnson", "rollNumber": 23456 },
      { "firstName": "Charlie", "lastName": "Brown", "rollNumber": 34567 },
      { "firstName": "David", "lastName": "Williams", "rollNumber": 45678 },
      { "firstName": "Emily", "lastName": "Jones", "rollNumber": 56789 },
      { "firstName": "Frank", "lastName": "Miller", "rollNumber": 67890 },
      { "firstName": "Grace", "lastName": "Davis", "rollNumber": 78901 },
      { "firstName": "Harry", "lastName": "Garcia", "rollNumber": 89012 },
      { "firstName": "Isabella", "lastName": "Rodriguez", "rollNumber": 90123 },
      { "firstName": "Jack", "lastName": "Wilson", "rollNumber": 10234 }
    ];
    await collection.insertMany(students);
    console.log(`${students.length} students inserted into collection '${collection.collectionName}'`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

createDatabase();
