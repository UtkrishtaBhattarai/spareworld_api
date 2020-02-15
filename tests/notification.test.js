// use the path of your model
const Notification = require("../models/notification");
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

describe("Notification Schema test", () => {
  it("Add product testing anything", () => {
    const notification = {
      title: "rajaram",
      description: "La hai la hai la"
    };
    return Register.create(notification).then(pro_ret => {
      expect(pro_ret.title).toEqual("rajaram");
    });
  });

  it("to test the update", async () => {
    return Notification.findOneAndUpdate(
      { _id: Object("5e4796737db4f51dc416e39f") },
      { $set: { title: "shtaam" } }
    ).then(notification => {
      expect(notification.title).toEqual("shyaam");
    });
  });
  //the code below is for delete testing
  it("to test the delete register is working or not", async () => {
    const status = await Notification.deleteMany();
    expect(status.ok).toBe(1);
  });
});
