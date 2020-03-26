const Joi = require('joi');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    categories: {
        type: [mongoose.Types.ObjectId],
        required: true,
        default: []
    }
});

const Board = mongoose.model('Boards', boardSchema);

function validateBoard(board) {
    const schema = {
        title: Joi.string().min(3).max(50)
    };
    return Joi.validate(board, schema);
}

exports.Board = Board;
exports.validate = validateBoard;
