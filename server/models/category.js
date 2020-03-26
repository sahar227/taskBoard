const Joi = require('joi');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    tasks: {
        type: [mongoose.Types.ObjectId],
        required: true,
        default: []
    },
    color: {
        type: String,
        required: true,
        default: '#ffffff', // default color is white
    },
    boardId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});
const Category = mongoose.model('Categories', categorySchema);

function validateCategory(category) {
    const schema = {
        title: Joi.string().min(3).max(50).required(),
        color: Joi.string()
    }
}

exports.Category = Category;
exports.validate = validateCategory;

