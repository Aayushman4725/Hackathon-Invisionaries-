const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/BillingSystem').then(
    async () => {
        console.log("connected")


    }


).catch(
    err => console.log(err)
);

const studentInfoSchema = new mongoose.Schema({
    studentRoll: {
        type: Number,
        unique: true

    },
    transaction: [{
        type: Schema.Types.ObjectId,
        ref: 'transactionInfo'

    }],
    studentName: String,
    dueAmount: Number,
    semester: Number,
})
const transactionInfoSchema = new mongoose.Schema({
    studentRoll: {
        type: Number,
        require:true

    },
    paidAmount: Number,
    semester: Number,
})
const studentInfoModel = mongoose.model("studentInfo", studentInfoSchema)
const transactionInfoModel = mongoose.model("transactionInfo", transactionInfoSchema)

app.get("/getStudentInfo", async (req, res) => {
    
    try {
        const student = await studentInfoModel.findOne({ studentRoll: req.body.studentRoll })
        res.json(student)
    } catch (error) {
        res.errored(error)
        console.log(error)
    }

})

app.post("/createNewStudentInfo", async (req, res) => {
    try {
        const studentInfo = new studentInfoModel();
        studentInfo.studentName = req.body.studentName;
        studentInfo.studentRoll = req.body.studentRoll;
        studentInfo.dueAmount = req.body.dueAmount;
        studentInfo.semester = req.body.semester;
        await studentInfo.save();
        res.send("created");
    }
    catch (err) {
        res.errored(err)

    }
})

app.delete("/deleteStudentInfo", async (req, res) => {
    try {
        const studentInfo = await studentInfoModel.findOne({ studentRoll: req.body.studentRoll })
        await studentInfo.deleteOne({studentRoll : req.body.studentRoll})
        
        res.send("deleted");
    }
    catch (err) {

    }
})

app.put("/updateIntoStudentInfo", async (req, res) => {
    try {
        const studentInfo = await studentInfoModel.findOne({ studentRoll: req.body.studentRoll })
        studentInfo.studentName = req.body.studentName;
        studentInfo.studentRoll = req.body.studentRoll;
        studentInfo.dueAmount = req.body.dueAmount;
        studentInfo.semester = req.body.semester;
        await studentInfo.save();
        res.send("updated");
    }
    catch (err) {
        res.errored(err)

    }
})

app.post

app.post("/createPaymentInfo", async (req, res) => {
    try {
        const studentInfo = new studentInfoModel();
        await studentInfo.findOne({studentRoll:req.body.studentRoll})
        const transactionInfo = new transactionInfoModel();
        transactionInfo.studentRoll = studentInfo.studentRoll;
        transactionInfo.paidAmount = studentInfo.dueAmount;
        transactionInfo.semester = studentInfo.semester;
        await transactionInfo.save();
        res.send("created");
    }
    catch (err) {
        res.errored(err)

    }
})

app.get("/getTransactionInfo", async (req, res) => {
    
    try {
        const transactionInfo = await transactionInfoModel.findOne({ studentRoll: req.body.studentRoll })
        res.json(transactionInfo)
    } catch (error) {
        res.errored(error)
        console.log(error)
    }

})

app.listen(3000, () => {
    console.log("server is running")
})

