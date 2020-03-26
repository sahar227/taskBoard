function validate(validateHandler) {
    return function (req,res,next) {
        const { error } = validateHandler(req.body);
        if(error)
            return res.status(400).send(error.details[0].message);
        next();
    }
}

module.exports = validate;