var mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    _categoryID:mongoose.Schema.Types.ObjectId,
    categoryName: {
        type: String,
        required: true
    },
})

const Category = mongoose.model('category', CategorySchema)

module.exports = Category;