const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        minLength: [3, 'Minimum length of name must be 3!'],
        maxLength: [100, 'Maximum length of name must be 100!'],
        required: [true, 'Product name is required!']
    },
    description: {
        type: String,
        maxLength: [200, 'Maximum length of description must be 200!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!']
    }
}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);