var express = require('express');
var Task =require('./models/task');

const app=express();

const port=8000;

var get = require('./routes/get')
app.use('/', get)

var post = require('./routes/post')
app.use('/', post)

var del= require('./routes/del')
app.use('/', del)

app.listen(port,function(error)
{
if(error)
{
    console.log("Fail");
}
console.log("Success",port);
});