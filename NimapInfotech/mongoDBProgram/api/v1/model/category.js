var mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    _categoryID: mongoose.Schema.Types.ObjectId,
    categoryName: {
        type: String,
        required: true
    },
})
const Category = mongoose.model('categories', CategorySchema)
module.exports = Category;