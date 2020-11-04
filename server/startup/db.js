const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");
const Fawn = require("fawn");

module.exports = function() {
  mongoose
    .connect(config.get("connectionString"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => winston.info("Connected to MongoDB..."));
};

Fawn.init(mongoose);
