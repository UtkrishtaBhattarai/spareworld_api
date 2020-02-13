const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/orders');
router.post('/addorder', (req, res, next) => {
    console.log(req.body)
    Order.create({
        userid: req.body.userid,
        billingaddress: req.body.billingaddress,
        billingnumber: req.body.billingnumber,
        price: req.body.price,
        name: req.body.name,
        ordernumber: req.body.ordernumber,
        dispatched: false

    }).then((order) => {
        res.json({ status: "Product Added!" });
    }).catch(next);
});
router.post('/addorder1', (req, res, next) => {
    console.log(req.body.ordernumber)
    Order.create({
        userid: req.body.userid,
        billingaddress: req.body.billingaddress,
        billingnumber: req.body.billingnumber,
        price: req.body.product.price,
        name: req.body.product.name,
        ordernumber: req.body.ordernumber,
        dispatched: false

    }).then((order) => {
        res.json({ status: "Product Added!" });
    }).catch(next);
});
router.get('/checkorder/:id', (req, res, next) => {
    Order.find({ userid: req.params.id }).then(docs => {
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
router.get('/getorder', (req, res, next) => {
    Order.find()
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
router.get('/orderget/:id', function (req, res, next) {
    Order.find
        ({ ordernumber: req.params.id }).
        then(Order)
    {
        if (Order.dispatched == true) {
            res.send({ status: "dispatched" })
        }
        else {
            res.send({ status: "notdispatched" })
        }
    }
})
router.put('/updateorder/:id', (req, res, next) => {
    console.log(req.params.id + "is order id")
    console.log(req.body.dispatched)
    Order.findByIdAndUpdate(req.params.id,
        { $set: req.body }, { new: true })
        .then((order) => {

            res.json({ status: "Success" });
        })
});





module.exports = router;