const auth = require('./middleware/auth');
const bodyParser=require('body-parser');
const express=require('express');
var app=express();
app.use(bodyParser.urlencoded({
    extended:false
}));
require('./db/spareparts');
const registerRoute=require('./routes/register_route');
const categoryRoute=require('./routes/category_route');
app.use(express.json());
app.use(registerRoute);
app.use(categoryRoute);
app.listen(4000);
console.log("The localhost is running in port number 4000");
console.log("localhost:4000/");