const bodyParser=require('body-parser');
const express=require('express');
var app=express();
app.use(bodyParser.urlencoded({
    extended:false
}));
require('./db/spareparts');
const registerRoute=require('./routes/register_route');
app.use(express.json());
app.use(registerRoute);
app.listen(4000);