const validator = require('validator');

const validateRegisterData = (req, res, next) => {
    const { name, email, password } = req.body;

    if(!name.trim() || !email.trim() || !password.trim()) {
        return res.status(400).json({ error: 'Field cannot be empty!' });
    }

    if(!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Email is not valid!' });
    }

    if(!validator.isStrongPassword(password)) {
        return res.status(400).json({ error: 'Password not strong enough!' });
    }

    next();
}

const validateLoginData = (req, res, next) => {
    const { email, password } = req.body;

    if(!email.trim() || !password.trim() ) {
        return res.status(400).json({ error: 'Field cannot be empty!' });
    }

    next();
}

module.exports = {
    validateRegisterData,
    validateLoginData
};