const express = require("express");
const fs = require("fs");
const path = require("path");
const controller = require("./backend/controller/controller.js");
const bodyParser = require('body-parser')
const axios = require("axios");
const morgan = require("morgan");

// Models file
const studentInfo = require("./backend/models/usermodule");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const app = express();
const port = 3000;

// Serve static files, including images
app.use(express.static(path.join(__dirname, 'html')));

app.get('/feestructure.html', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/users');
    console.log(response.data);
    
    const feestructurePath = path.join(__dirname, 'html', 'feestructure.html');
    const feestructureData = fs.readFileSync(feestructurePath);

    // Set content type to HTML
    res.setHeader('Content-Type', 'text/html');

    res.status(200).send(feestructureData.toString());
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("Internal Server Error");
  }
});

console.log("Before query");
studentInfo.findOne({ semester: "4" }).exec()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.status(200);
  const indexPath = path.join(__dirname, 'html', 'index.html');
  const data = fs.readFileSync(indexPath);
  res.send(data.toString());
});

app.get('/generalfee.html', (req, res) => {
  const generalfee = path.join(__dirname, 'html', 'generalfee.html');
  const data = fs.readFileSync(generalfee);
  res.status(200).send(data.toString());
});

app.get('/about', (req, res) => {
  res.status(200).send('This is about page');
});

app.post('/', async (req, res) => {
  const studentsData = [
    { roll: '1', sem1: '90', sem2: '85', sem3: '78', sem4: '92', sem5: '88', sem6: '75', sem7: '80', sem8: '85' },
    { roll: '2', sem1: '85', sem2: '88', sem3: '92', sem4: '78', sem5: '85', sem6: '90', sem7: '80', sem8: '75' },
    { roll: '3', sem1: '90', sem2: '85', sem3: '78', sem4: '92', sem5: '88', sem6: '75', sem7: '80', sem8: '85' },
    { roll: '4', sem1: '85', sem2: '88', sem3: '92', sem4: '78', sem5: '85', sem6: '90', sem7: '80', sem8: '75' },
    { roll: '5', sem1: '90', sem2: '85', sem3: '78', sem4: '92', sem5: '88', sem6: '75', sem7: '80', sem8: '85' },
    { roll: '6', sem1: '85', sem2: '88', sem3: '92', sem4: '78', sem5: '85', sem6: '90', sem7: '80', sem8: '75' },
  ];
  
  // Insert data into MongoDB
  console.log(studentsData)
 var result = await studentInfo.insertMany(studentsData)
 
  res.send(result.insertedIds)

})

app.get("/api/getStudentInfo/:roll", async (req, res) => {
  try {
    const studentInfoData = await studentInfo.findOne({roll:req.params.roll});
    console.log(studentInfoData)
    if (!studentInfoData) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(studentInfoData);
  } catch (error) {
    console.error("Error fetching student info:", error);
    res.status(500).json({ message: error.message });
  }
});


// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://aayushmannp:Nepal%401984@cluster0.wolfmk9.mongodb.net/BillingSystem")
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.log("Error connecting to DB.", err);
  });
