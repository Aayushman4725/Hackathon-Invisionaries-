const express = require("express");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

const mongoUri = "mongodb://192.168.23.4:27017";
const dbName = "BiillingSystem";

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.status(200);
    const indexPath = path.join(__dirname, 'html', 'index.html');
    const data = fs.readFileSync(indexPath);
    res.send(data.toString());
});

app.get('/feestructure.html', async (req, res) => {
    let client;

    try {
        client = new MongoClient(mongoUri, { useUnifiedTopology: true });
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection('studentinfos'); // Update with your collection name

        const result = await collection.find({}).toArray();
        console.log(result);

        // You can use the fetched data (result) as needed

        const feestructurePath = path.join(__dirname, 'html', 'feestructure.html');
        const feestructureData = fs.readFileSync(feestructurePath);
        res.status(200).send(feestructureData.toString());
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        res.status(500).send("Internal Server Error");
    } finally {
        if (client) {
            await client.close(); // Close the MongoDB connection
        }
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
