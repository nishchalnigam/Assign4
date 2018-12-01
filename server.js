var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//var mongo = require('mongodb').MongoClient;

var mongoose = require('mongoose');

var Review = mongoose.model('BookReviews',{
    review: String,
    booktitle: String
});

var database;
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-control-Allow-Headers","Content-Type, Authorization");
    next();
})

app.get('/api/readReview', GetReviews)

app.post('/api/postReview', function(req,res){
    console.log(req.body);
    //database.collection('reviews').insertOne({'msg':'Post Review Works'});
    //database.collection('reviews').insertOne(res.body);
        var review = new Review(req.body);
    
    review.save();
    res.status(200);
})

function GetReviews(req,res)
{
    Review.find({}).exec(function(err, result){
        res.send(result);
    })
}

mongoose.connect("mongodb://localhost:27017/test", function(err,db){
   
    if(!err)
        console.log("Yeah");
    //db.collection('reviews').insertOne({'msg':'vhhh'});
    database=db;
    
});

var server = app.listen(5000, function(){
    console.log('Listening n server', server.address().port);
})
