const router = require('express').Router();
const {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const checkId = require('../middlewares/checkId');
const checkInput = require('../middlewares/checkInput');

// GET all products
router.get('/', getProducts);

// GET a product
router.get('/:id', checkId, getProduct);

// POST a product
router.post('/', checkInput, addProduct);

// UPDATE a product
router.put('/:id', checkId, updateProduct);

// DELETE a product
router.delete('/:id', checkId, deleteProduct);


module.exports = router;