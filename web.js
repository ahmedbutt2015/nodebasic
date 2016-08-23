// Done
var express = require('express');
var app = express();
app.set('view engine' , 'ejs');
app.use(express.static(__dirname + '/src'));

var logTime = function(req, res, next){
    req.requestTime = Date.now();
    next();
};

app.use(logTime);

app.get('/', function(req,res){
    res.render('index', {title : 'Acme' , yes : true});
});

app.get('/user/:id', function(req,res){
    var id = req.params.id;
    res.send(id);
});

app.listen(9000, function(){
    console.log('listening on port 9000')
});