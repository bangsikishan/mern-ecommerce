const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Create JWT
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'});
}

// Register user
const register = async (req, res) => {
    const { name, email, password, isTrader } = req.body;

    try {
        const exists = await User.findOne({ email });

        if(exists) {
            return res.status(400).json({ error: "Email already exists!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: hash, isTrader });

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    }
    catch(error) {
        res.status(404).json({ error: error.errors.name.message });
    }
}

// Login user
const login = async (req, res) => {
    res.status(200).json("Login user!");
}

// Logout user
const logout = async (req, res) => {
    res.status(200).json("Logout user!");
}


module.exports = {
    register,
    login,
    logout
}