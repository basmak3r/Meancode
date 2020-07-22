var mongo=require('mongoose');
mongo.connect('mongodb://localhost/testdata');

const db=mongo.connection;

db.on('error',console.error.bind(console,'Database error'));

db.once('Open',function()
{
    console.log('Databse Sucess');

});