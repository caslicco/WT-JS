const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.get('/students/:rollNumber', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('yourDatabaseName');
    const collection = db.collection('students');

    const rollNumber = req.params.rollNumber;
    const student = await collection.findOne({ rollNumber: rollNumber });

    if (student) {
      res.json({ name: student.fistName+student.lastName });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving student' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
