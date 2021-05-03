var mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    _productID: mongoose.Schema.Types.ObjectId,
    categoryID: mongoose.Schema.Types.ObjectId,
    productName: {
        type: String,
        required: true
    },
})
const Product = mongoose.model('products', ProductSchema)
module.exports = Product;