// Done
var http = require('http'),
    fs = require('fs');

function render(file_name, data, res){
    fs.readFile(file_name, function(err, contents){
        var compiled = contents.toString().replace('{{title}}', data.title);
        res.writeHead(2000);
        res.end(compiled);
    });
}

http.createServer(function(req,res){
    render('template.html',{title : 'Acme'}, res);
}).listen(9000, function(){
    console.log('Listening on port 9000');
});