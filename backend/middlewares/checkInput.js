const checkInput = (req, res, next) => {
    const { name, price } = req.body;

    if(!name || !price) {
        return res.status(400).json({ error: 'Fields cannot be empty' });
    }

    next();
}

module.exports = checkInput;