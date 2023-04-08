const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        minLength: [3, 'Minimum length of name must be 3!'],
        maxLength: [100, 'Maximum length of name must be 100!'],
        required: [true, 'Name is required!']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
    isTrader: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);