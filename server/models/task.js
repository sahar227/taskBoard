const Joi = require('joi');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 0,
        maxlength: 2048
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    boardId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Task = mongoose.model('Tasks', taskSchema);

function validateTask(task) {
    const schema = {
        title: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(0).max(2048).required()
    };

    return Joi.validate(task, schema);
}

module.exports.Task = Task;
module.exports.validate = validateTask;