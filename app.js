// Done
var http = require('http'),
    fs = require('fs');

var Response = function(file_name, response){
    fs.readFile(file_name, function(err, contents){
        response.writeHead(200);
        response.end(contents);
    });
};

http.createServer(function(request, response){

    console.log(request.url);
    switch(request.url){
        case '/':
            Response('index.html', response);
            break;
        case '/about':
            Response('about.html', response);
            break;
        default:
            Response('404.html', response);
    }

}).listen(3000);

console.log("Listening on port 3000");