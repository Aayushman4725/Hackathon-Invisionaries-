const express = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const mongoUri = "mongodb://localhost:27017/BiillingSystem"; // Update with your MongoDB URI

mongoose.connect(mongoUri, { useNewUrlParser: true });
const studentInfoSchema = new mongoose.Schema({
    studentRoll: {
        type: Number,
        unique: true
    },

    studentName:String,
    dueAmount:Number,
    semester:Number,
    // Define your schema based on your MongoDB collection structure
    // Example: name: String, age: Number, etc.
});

const StudentInfo = mongoose.model("StudentInfo", studentInfoSchema);

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.status(200);
    const indexPath = path.join(__dirname, 'html', 'index.html');
    const data = fs.readFileSync(indexPath);
    res.send(data.toString());
});

app.get('/feestructure.html', async (req, res) => {
    try {
        const result = await StudentInfo.find({});
        console.log(result);

        // You can use the fetched data (result) as needed

        const feestructurePath = path.join(__dirname, 'html', 'feestructure.html');
        const feestructureData = fs.readFileSync(feestructurePath);
        res.status(200).send(feestructureData.toString());
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/generalfee.html', (req, res) => {
    const generalfee = path.join(__dirname, 'html', 'generalfee.html');
    const data = fs.readFileSync(generalfee);
    res.status(200).send(data.toString());
});

app.get('/about', (req, res) => {
    res.status(200).send('This is about page');
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
