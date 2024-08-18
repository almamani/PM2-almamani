require("dotenv").config();
const mongoose = require("mongoose");

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

const dbCon = async () => {
  await mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.xtl8l.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=CINEMA`
  );
};

module.exports = { dbCon };
