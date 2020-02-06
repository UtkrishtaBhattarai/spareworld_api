const express = require('express');
const router = express.Router();
const BajajProduct = require('../models/bajajproduct');
router.post('/addbajajproducts', (req, res, next) => {
    BajajProduct.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        specification: req.body.specification
    }).then((bajajproduct) => {
        res.json({ status: "Product Added!" });
    }).catch(next);
});
router.get('/getbajajproduct', (req, res, next) => {
    BajajProduct.find()
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

router.delete('/deletebajajproduct/:id', function (req, res, next) {
    BajajProduct.findByIdAndDelete(req.params.id).then(response => {
        console.log("Product detleted of" + req.params.id)
    })
})
router.get('/:id', function (req, res) {
    BajajProduct.findById(req.params.id)
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

router.put('/updatebajajproduct/:id', (req, res, next) => {
    BajajProduct.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        specification: req.body.specification,
        price: req.body.price
    }, { new: true })
});

router.get('/getproductc', (req, res, next) => {

    BajajProduct
        .find()
        .sort('-_id')
        .populate('category')
        .exec(function (error, results) {
            res.send(results);
        });
})


module.exports = router;