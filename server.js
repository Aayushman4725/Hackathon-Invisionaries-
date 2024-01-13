const express = require("express");
const fs = require("fs");
const path = require("path");
const controller = require("./backend/controller/controller.js");
const axios = require("axios");
const morgan = require("morgan");

// Models file
const studentInfo = require("./backend/models/usermodule");
const mongoose = require("mongoose"); // Fix the import statement

const app = express();
const port = 3000;

// Database connection
const connectDB = require('./backend/database/connection');
connectDB();

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

// Rest of your code...

console.log("Before query");
studentInfo.findOne({ semester:"4" }).exec()
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

app.get('/api/users', controller.find);
app.put('/api/users/:id', controller.update);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
