const express=require('express');
const route=express.Router();

route.get('/', (req, res) => {
    res.status(200);
    const indexPath = path.join(__dirname, 'html', 'index.html');
    const data = fs.readFileSync(indexPath);
    res.send(data.toString());
});



route.get('/generalfee.html', (req, res) => {
    const generalfee = path.join(__dirname, 'html', 'generalfee.html');
    const data = fs.readFileSync(generalfee);
    res.status(200).send(data.toString());
});

route.get('/about', (req, res) => {
    res.status(200).send('This is about page');
});

module.exports = route;