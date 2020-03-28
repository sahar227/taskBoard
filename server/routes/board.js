const { Board, validate } = require("../models/board");
const { User } = require("../models/user");
const findResource = require("../middleware/findResource");
const validation = require("../middleware/validate");
const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/:id", [auth, findResource(Board)], (req, res) => {
  return res.send(req.resource);
});

router.post("/", [auth, validation(validate)], async (req, res) => {
  const board = new Board({ title: req.body.title, userId: req.user._id });
  await board.save();
  return res.send(board);
});

module.exports = router;
