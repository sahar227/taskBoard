const { List, validate } = require("../models/list");
const { Task } = require("../models/task");
const validation = require("../middleware/validate");
const findResource = require("../middleware/findResource");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");
const Fawn = require("fawn");
const express = require("express");
const router = express.Router();

router.get("/:boardId", [auth], async (req, res) => {
  const lists = await List.find({
    userId: req.user._id,
    boardId: req.params.boardId
  });
  return res.send(lists);
});

router.post("/", [auth, validation(validate)], async (req, res) => {
  const list = new List({ ...req.body, userId: req.user._id });
  await list.save();
  return res.send(list);
});

router.delete(
  "/:id",
  [auth, findResource(List), authorize],
  async (req, res) => {
    new Fawn.Task()
      .remove(List, { _id: req.resource._id })
      .remove(Task, { listId: req.resource._id })
      .run();
    return res.send(req.resource);
  }
);

router.put("/:id", [auth, findResource(List), authorize], async (req, res) => {
  await req.resource.set(...req.params);
  return res.send(req.resource);
});

module.exports = router;
