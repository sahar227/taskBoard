const auth = require('../middleware/auth');
const validation = require('../middleware/validate');
const {Task, validate} = require('../models/task');
const express = require('express');
const router = express.Router();
const _ = require('lodash');


router.post('/', validation(validate), async (req, res) => {
    try {
        const task = new Task(_.pick(req.body, 'title', 'description'));
        await task.save();
        res.send(task);
    }
    catch(ex) {
        res.status(500).send(ex);
    }
});

module.exports = router;