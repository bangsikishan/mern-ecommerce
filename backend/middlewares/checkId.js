const mongoose = require('mongoose');

// Check if mongoose id is valid or not
const checkId = (req, res, next) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Not a valid id!' });
    }

    next();
}

module.exports = checkId;