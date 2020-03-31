/// Middleware for finding resources for routes with id param
function findResource(mongooseCollection, idParamName = "id") {
  return async function(req, res, next) {
    if (!req.params[idParamName])
      throw new Error(
        "findResource middleware should be used only on routes with id param"
      );
    const resource = await mongooseCollection.findById(req.params[idParamName]);
    if (!resource)
      return res
        .status(404)
        .send("The resource with the given id was not found");

    req.resource = resource;
    next();
  };
}

module.exports = findResource;
