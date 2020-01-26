const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Register = require('../models/register');
const router = express.Router();
const auth = require('../auth');

router.post('/register_user', (req, res, next) => {
    let password = req.body.password;
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            throw new Error('Could not hash!');
        }
        Register.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hash,
            address: req.body.address,
            number:req.body.number
        }).then((register) => {
            let token = jwt.sign({ _id: register._id }, process.env.SECRET);
            res.json({ status: "Signup success!", token: token });
        }).catch(next);
    });
});

router.post('/login_user', (req, res, next) => {
    Register.findOne({ email: req.body.email })
        .then((register) => {
            if (register == null) {
                let err = new Error('User not found!');
                err.status = 401;
                return next(err);
            } else {
                bcrypt.compare(req.body.password, register.password)
                    .then((isMatch) => {
                        if (!isMatch) {
                            let err = new Error('Password does not match!');
                            err.status = 401;
                            return next(err);
                        }
                        
                        let token = jwt.sign({ _id: register._id }, process.env.SECRET);
                        console.log(token)
                        res.json({ status: 'Login success!', token: token });
                    }).catch(next);
            }
        }).catch(next);
})

router.get('/me', auth.verifyUser, (req, res, next) => {
    res.json({ _id: req.Register._id, fname: req.Register.fname, lname: req.Register.lname, email: req.Register.email, address:req.Register.address,number:req.Register.number });
});

router.put('/me', auth.verifyUser, (req, res, next) => {
    User.findByIdAndUpdate(req.._id, { $set: req.body }, { new: true })
        .then((user) => {
            res.json({ _id: user._id, firstName: req.user.firstName, lastName: req.user.lastName, username: user.username, image: user.image });
        }).catch(next);
});

module.exports = router;