const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true,
        unique: true
    },
    calendar: {
        type: String,
        required: true
    },
    file: {
        type: String,
    }
});


const Product = new mongoose.model("Product", productSchema);

module.exports = Product;