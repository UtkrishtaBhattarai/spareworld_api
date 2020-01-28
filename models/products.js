const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String
});
module.exports = mongoose.model('spareproduct', productSchema);