const mongoose = require('mongoose');

require("dotenv").config();

var connectDB = mongoose.connect(process.env.URI, {
  dbName: process.env.databaseName,
  user: process.env.userName,
  pass: process.env.Password,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log("DB Connected!")
}).catch(err => {
  console.log(Error, err.message);
})
module.exports = connectDB;
