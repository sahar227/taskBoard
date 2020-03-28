const { Board, validate } = require("../models/board");
const findResource = require("../middleware/findResource");
const validation = require("../middleware/validate");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const boards = await Board.find({ userId: req.user._id });
  return res.send(boards);
});

router.get("/:id", [auth, findResource(Board)], (req, res) => {
  if (req.resource.userId === req.user._id) return res.send(req.resource);
  return res.status(403).send("Access denied");
});

router.patch(
  "/:id",
  [auth, findResource(Board), validation(validate)],
  async (req, res) => {
    if (req.resource.userId === req.user._id) {
      await req.resource.set({ title: req.body.title });
      return res.send(req.resource);
    }
    return res.status(403).send("Access denied");
  }
);

router.delete("/:id", [auth, findResource(Board)], async (req, res) => {
  if (req.resource.userId === req.user._id) {
    const board = await Board.findByIdAndRemove(req.params.id);
    return res.send(board);
  }
  return res.status(403).send("Access denied");
});

router.post("/", [auth, validation(validate)], async (req, res) => {
  const board = new Board({ title: req.body.title, userId: req.user._id });
  await board.save();
  return res.send(board);
});

module.exports = router;
