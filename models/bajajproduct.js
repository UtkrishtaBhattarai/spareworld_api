const mongoose = require('mongoose');
const BajajSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String,
    specification: String
});
module.exports = mongoose.model('bajajproduct', BajajSchema);
