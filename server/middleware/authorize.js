function authorize(req, res, next) {
  if (req.resource.userId.toString() !== req.user._id)
    return res.status(403).send("Access denied");

  next();
}

module.exports = authorize;
