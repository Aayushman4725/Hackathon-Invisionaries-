const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const port=3000;

app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req,res)=>{
    res.status(200);
    res.send('This is a test page');
});

app.get('/about', (req,res)=>{
    res.send('This is about page');
})

app.get('/html', (req,res)=>{
    const data=fs.readFileSync('/html/index.html');
    res.send(data.toString());
})

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
});