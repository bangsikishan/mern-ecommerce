const router = require('express').Router();
const {
    register,
    login,
    logout
} = require('../controllers/userController');
const { 
    validateRegisterData,
    validateLoginData 
} = require('../middlewares/validateAuthData');

// Register user
router.post('/register', validateRegisterData, register);

// Login user
router.post('/login', validateLoginData, login);

// Logout user
router.post('/logout', logout);


module.exports = router;