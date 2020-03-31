const { Task, validate } = require("../models/task");
const validation = require("../middleware/validate");
const findResource = require("../middleware/findResource");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");
const express = require("express");
const router = express.Router();

router.get("/:boardId", [auth], async (req, res) => {
  const tasks = await Task.find({
    userId: req.user._id,
    boardId: req.params.boardId
  });
  return res.send(tasks);
});

router.post("/", [auth, validation(validate)], async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user._id });
  await task.save();
  return res.send(task);
});

router.delete(
  "/:id",
  [auth, findResource(Task), authorize],
  async (req, res) => {
    const task = await Task.findByIdAndRemove(req.params.id);
    return res.send(task);
  }
);

router.put("/:id", [auth, findResource(Task), authorize], async (req, res) => {
  await req.resource.set(...req.params);
  return res.send(req.resource);
});

module.exports = router;
