// use the path of your model
const Cart = require("../models/cart");
const mongoose = require("mongoose");
// use the new name of the database
const url = "mongodb://localhost:27017/spare_api_test";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});

describe("Cart Schema test", () => {
  it("Add product testing anything", () => {
    const cart = {
      userid: "98327439",
      productid: "jbsajdb87y78"
    };
    return Cart.create(cart).then(pro_ret => {
      expect(pro_ret.userid).toEqual("98327439");
    });
  });
  it("to test the delete register is working or not", async () => {
    const status = await Cart.deleteMany();
    expect(status.ok).toBe(1);
  });
});
