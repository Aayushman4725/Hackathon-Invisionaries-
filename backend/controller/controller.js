const studentInfo = require('../models/usermodule');

// Fetch user info
exports.find = (req, res) => {
  studentInfo.find()
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Error retrieving the user info" });
    });
}

// Update user info
exports.update = (req, res) => {
  // Implement your update logic here
}
