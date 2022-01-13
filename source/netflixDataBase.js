const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/NetflixDataBase")
  .then(() => console.log("code executed"))
  .catch((err) => console.log("error"));
/*user Details*/
const userDetails = new mongoose.Schema({
  user_id: { type: Number, require: true },
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  created_at: { type: Date, require: true },
  updated_at: { type: Date, require: true },
  last_login_at: { type: Date, require: true },
});

const UserDetails = new mongoose.model("UserDetails", userDetails);

const userdetails = new UserDetails({
  user_id: 01,
  name: "john",
  email: "john@gmail.com",
  password: "1234",
  created_at: 2022 - 01 - 01,
  updated_at: 2022 - 01 - 02,
  last_login_at: 2022 - 01 - 03,
});
userdetails.save((err, data) => {
  console.log({ data });
});
/*profiles details*/
//profile schema
const profiles = new mongoose.Schema({
  profile_id: { type: Number, require: true },
  user_id: { type: Number, require: true },
});
//profile collection
const Profiles = new mongoose.model("Profiles", profiles);
const profiledetails = new Profiles({
  profile_id: 01,
  user_id: 01,
});

profiledetails.save((err, data) => {
  console.log({ data });
});

//subscription schema
const subscriptionsschema = new mongoose.Schema({
  user_id: { type: Number, require: true },
  plan_id: { type: Number, require: true },
  valid_till: { type: Date, require: true },
  created_at: { type: Date, require: true },
  updated_at: { type: Date, require: true },
});
//collection created
const Subscription = new mongoose.model("Subscription", subscriptionsschema);

//subscription data
const subscriptionDetails = new Subscription({
  user_id: 01,
  plan_id: 01,
  valid_till: 2022 - 09 - 11,
  created_at: 2022 - 01 - 01,
  updated_at: 2022 - 02 - 02,
});
subscriptionDetails.save((err, data) => {
  console.log({ data });
});
//schema for Videos
const videoSchema = new mongoose.Schema({
  video_id: { type: Number, require: true },
  title: { type: String, require: true },
  summary: { type: String, require: true },
  url: { type: String, require: true },
  length: { type: Number, require: true },
  censor_rating: { type: Number, require: true },
  created_at: { type: Date, require: true },
  updated_at: { type: Date, require: true },
});
const Videos = new mongoose.model("Videos", videoSchema);
const videoDetails = new Videos({
  video_id: 2555,
  title: "shinchan",
  summary: "funny",
  url: "www.hungama.shichan.com",
  length: 25,
  censor_rating: 10,
  created_at: 2001 - 05 - 2,
  updated_at: 2012 - 05 - 5,
});
videoDetails.save((err, data) => {
  console.log({ data });
});
//schema of Views
const ViewSchema = new mongoose.Schema({
  view_id: { type: Number, require: true },
  user_id: { type: Number, require: true },
  //watched_till: { type: Timestamp, default: Timestamp.now },
  updated_at: { type: Date, require: true },
});
//collection name
const Views = new mongoose.model("Views", ViewSchema);
const ViewDetails = new Views({
  view_id: 255,
  user_id: 01,
  updated_at: 2022 - 05 - 01,
});
//schema of plans
const plansSchema = new mongoose.Schema({
  plans_id: { type: Number, require: true },
  name: { type: String, require: true },
  charges: { type: Number, require: true },
});
const plans = new mongoose.model("Plans", plansSchema);
const plansDetails = new plans({
  plans_id: 01,
  name: "super plan",
  charges: 500,
});
