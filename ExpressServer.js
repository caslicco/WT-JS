const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5000;

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

app.get('/students/:rollNum', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('studentDetails');
    const collection = db.collection('details');

    const rollNum = parseInt(req.params.rollNum);
    
    const student = await collection.findOne({ rollNumber: rollNum });
    console.log(student)
    if (student) {
      let fname = student.firstName+" "+student.lastName;
      res.json({ name:  fname});
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
