// use the path of your model
const product = require('../models/products');
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

describe('Product Schema test', () => {
    // the code below is for insert testing
    it('Add product testing anything', () => {
        const product = {
            'name': 'Bike Chasis',
            'price': 123123
        };
        return product.create(product)
            .then((pro_ret) => {
                expect(pro_ret.name).toEqual('Bike Chasis');
            });
    });
    //the code below is for delete testing
    it('to test the delete register is working or not', async () => {
        const status = await Register.deleteMany();
        expect(status.ok).toBe(1);
    });
    it('to test the update', async () => {

        return product.findOneAndUpdate({ _id: Object('5e3927746360f40ba4dc9107') },
            { $set: { name: 'chasis' } })
            .then((product) => {
                expect(product.name).toEqual('chasis')
            })

    });
})