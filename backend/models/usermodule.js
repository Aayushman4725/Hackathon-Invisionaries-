const mongoose = require('mongoose')
const studentInfoSchema = new mongoose.Schema({
    studentRoll: {
      type: Number,
      unique: true,
    },
    semester: Number,
    dueAmount: Number,
  });

  const studentInfo=mongoose.model('Student',studentInfoSchema);
  module.exports =studentInfo;