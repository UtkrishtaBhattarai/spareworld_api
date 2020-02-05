const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String,
    specification: String,
    categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    }

});

module.exports = mongoose.model('spareproduct', productSchema);
