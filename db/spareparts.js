const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/spare_api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));