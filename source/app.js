const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/person")
  .then(() => console.log("code executed"))
  .catch((err) => console.log("error"));

//schema
//A mongose schema defines the structure of the document
//default values , validators, etc..,

const personDetailschema = new mongoose.Schema({
  name: { type: String, required: true },
  city: String,
  age: Date,
  Mobile_no: Number,
  work_Date: {
    type: Date,
    default: Date.now,
  },
});
//mongose model

//PersonDetails is database Name
const PersonDetail = new mongoose.model("PersonDetail", personDetailschema);
//create document or insert

const priyankaDetails = new PersonDetail({
  name: "priyanka",
  city: "indore",
  age: 1995 - 08 - 02, //YYYY-mm-dd>
  Mobile_no: 9165286815,
});
priyankaDetails.save((err, data) => {
  console.log({ err, data });
});
const BulBulDetails = new PersonDetail({
  name: "BulBul",
  city: "indore",
  age: 2000 - 03 - 07, //YYYY-mm-dd>
  Mobile_no: 999999999,
});
BulBulDetails.save();
