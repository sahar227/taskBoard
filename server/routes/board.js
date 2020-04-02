const { Board, validate } = require("../models/board");
const { List } = require("../models/list");
const { Task } = require("../models/task");
const findResource = require("../middleware/findResource");
const validation = require("../middleware/validate");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");
const Fawn = require("fawn");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const boards = await Board.find({ userId: req.user._id });
  return res.send(boards);
});

router.get("/:id", [auth, findResource(Board), authorize], (req, res) => {
  return res.send(req.resource);
});

router.patch(
  "/:id",
  [auth, findResource(Board), validation(validate), authorize],
  async (req, res) => {
    await req.resource.set({ title: req.body.title });
    return res.send(req.resource);
  }
);

router.delete(
  "/:id",
  [auth, findResource(Board), authorize],
  async (req, res) => {
    new Fawn.Task()
      .remove(Board, { _id: req.resource._id })
      .remove(List, { boardId: req.resource._id })
      .remove(Task, { boardId: req.resource._id })
      .run();
    return res.send(req.resource);
  }
);

router.post("/", [auth, validation(validate)], async (req, res) => {
  const board = new Board({ title: req.body.title, userId: req.user._id });
  await board.save();
  return res.send(board);
});

module.exports = router;
