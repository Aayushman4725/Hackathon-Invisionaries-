const mongoose = require('mongoose')
const studentInfoSchema = new mongoose.Schema({
    roll: String,
    sem1: String,
    sem2: String,
    sem3: String,
    sem4: String,
    sem5: String,
    sem6: String,
    sem7: String,
    sem8: String 
  });

  const studentInfo=mongoose.model('Student',studentInfoSchema);
  module.exports =studentInfo;