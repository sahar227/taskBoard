const {Board, validate} = require('../models/board');
const {User} = require('../models/user');
const findResource = require('../middleware/findResource');
const validation = require('../middleware/validate');
const auth = require('../middleware/auth');
const Fawn = require('fawn');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

Fawn.init(mongoose);

router.get('/:id', [auth, findResource(Board)], (req, res) => {
    return res.send(req.resource);
});

router.post('/', [auth, validation(validate)], async (req, res) => {
    const board = new Board({title: req.body.title});
    const user = await User.findById(req.user._id);
    const updatedBoards = [...user.boards, {_id: board._id, title: board.title}];
    await Fawn.Task()
        .save('Boards', board)
        .update('users', {_id: user._id},
            {boards: updatedBoards})
        .run();
    return res.send(board);
});

module.exports = router;