const mongoose = require('mongoose');
const Cart = mongoose.Schema({

    userid: String,
    productid: String
})
module.exports = mongoose.model('cart', Cart);