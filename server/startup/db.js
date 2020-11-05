const winston = require("winston");
const mongoose = require("mongoose");
const {connectionString} = require("../environment");
const Fawn = require("fawn");

module.exports = function() {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => winston.info("Connected to MongoDB..."));
};

Fawn.init(mongoose);
