const mongoose = require("mongoose");
const Joi = require("joi");

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  boardId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
});
const List = mongoose.model("lists", listSchema);

function validateList(list) {
  const schema = {
    title: Joi.string()
      .min(3)
      .max(20)
      .required(),
    boardId: Joi.objectId().required()
  };
  return Joi.validate(list, schema);
}

exports.List = List;
exports.validate = validateList;
