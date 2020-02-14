const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');

router.post('/addproducts', (req, res, next) => {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        specification: req.body.specification,
        categoryid: req.body.categoryid
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

router.delete('/deleteproduct/:id', function (req, res, next) {
    Product.findByIdAndDelete(req.params.id).then(response => {
        console.log("Product detleted of" + req.params.id)
    })
})


router.get('/:id', function (req, res) {
    Product.findById(req.params.id)
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
})

router.patch('/updateproduct/:id', (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        specification: req.body.specification,
        price: req.body.price
    }, { new: true })
});



router.get('/getproductc', (req, res, next) => {

    Product
        .find()
        .sort('-_id')
        .populate('category')
        .exec(function (error, results) {
            res.send(results);
        });
})


module.exports = router;