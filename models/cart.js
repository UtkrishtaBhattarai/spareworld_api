const mongoose = require('mongoose');
const Cart = mongoose.Schema({

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
        required: true
    },

    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spareproduct',
        required: true
    }
})
module.exports = mongoose.model('cart', Cart);