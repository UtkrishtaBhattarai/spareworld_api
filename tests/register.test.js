// use the path of your model
const Register = require('../models/register');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/spare_api_test';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});

describe('Register Schema test', () => {
    // the code below is for insert testing
    it('Add product testing anything', () => {
        const register = {
            'fname': 'rajaram',
            'email': 'rajara324m@gmail.com',
            'password': 'rajaram'
        };
        return Register.create(register)
            .then((pro_ret) => {
                expect(pro_ret.fname).toEqual('rajaram');
            });
    });
    //the code below is for delete testing
    // it('to test the delete register is working or not', async () => {
    //     const status = await Register.deleteMany();
    //     expect(status.ok).toBe(1);
    // });
    it('to test the update', async () => {

        return Register.findOneAndUpdate({ _id: Object('5e3927746360f40ba4dc9107') },
            { $set: { fname: 'ramm' } })
            .then((register) => {
                expect(register.fname).toEqual('ramm')
            })

    });
})