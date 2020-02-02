const express = require('express');
const mongoose = require('mongoose');
const Cart = require('../models/cart');
const router = new express.Router();
const bodyParser = require('body-parser');
var app = express();

router.get('/', function (req, res) {
    Cart.find()
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


router.post('/addcart', (req, res, next) => {
    Cart.create({
        productid: req.body.productid,
        userid: req.body.userid
    }).then((cart) => {
        console.log(req.body);
        res.json({ status: "Cart Added!" });
    }).catch(next);
});


router.delete('/deletecart/:id', function (req, res) {
    Cart.findByIdAndDelete(req.params.id, req.body, function (err, register) {
        if (err) return next(err);
        res.json(register);
    });
});

router.get('/:id', function (req, res) {
    Cart.findById(req.params.id)
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

router.post("/checkcart", function (req, res) {
    const pp = Cart.find({ productid: req.body.productid, userid: req.body.userid }).countDocuments().then(function (count) {
        if (count == 0) {
            res.json({ status: "addhere" });
        }
        else {
            res.json({ status: "cantadd" });
        }
    })
})

router.post('/checkcart1', (req, res, next) => {
    Cart.find({
        productid: req.body.productid,
        userid: req.body.userid
    }).then((cart) => {
        console.log(req.body);
        res.json({ status: "Cart Found!" });
    }).catch(next);
});


module.exports = router;
