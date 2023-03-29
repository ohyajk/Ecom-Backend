const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        min: 1,
        max: 5
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product