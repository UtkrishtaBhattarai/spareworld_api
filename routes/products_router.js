const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');
router.post('/addproducts', (req, res, next) => {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    }).then((product) => {
        res.json({ status: "Product Added!" });
    }).catch(next);
});

router.get('/getproduct', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;