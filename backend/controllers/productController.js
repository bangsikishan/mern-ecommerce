const Product = require('../models/productModel');

// GET all products
const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        
        res.status(200).json(products);
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
}

// GET a product
const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        if(!product) {
            return res.status(400).json({ error: 'No product found!' });
        }

        res.status(200).json(product);
    } 
    catch(error) {
        res.status(400).json({ error: error.message });
    }
}

// POST a product
const addProduct = async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const product = await Product.create({ name, description, price });

        res.status(200).json(product);
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
}

// UPDATE a product
const updateProduct = async (req, res) => {
    const { id } = req.params;

    res.status(200).json({ msg: `UPDATE a product with id ${id}`});
}

// DELETE a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    res.status(200).json({ msg: `DELETE a product with id ${id}`});
}


module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}