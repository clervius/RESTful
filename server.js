var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var Bear = require('./app/models/bear');



//config
mongoose.connect('mongodb://clervius:JcVrm431@ds038379.mlab.com:38379/scotchapp');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


// Routes
var router = express.Router();

//middleware for all requests
router.use(function(req, res, next){
    // do logging
    console.log('Something is happeneing');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res){
    res.json({message: 'hooray! welcome to the api!'});
});




// register routes
app.use('/api', router);

app.listen(port);
console.log("JC you are the man! listening on port " + port);