var net = require('net');
var server = net.createServer(),
    clients = [],
    express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/src'));

app.get('*', function(req,res){
   res.render('index', {title : 'Acme'});
});

app.listen(9000);

var config = {
    port : 9001
};

server.on('connection', function(client){
    console.log(clien + ' connected');
    clients.push(client);

    client.on('data', function(data){
        broadCast(client, data);
    });

    client.on('end', function(client){
        clients.splice(clients.indexOf(client), 1);
    });
    
}).listen(config.port, function(){
    
    console.log('Listening on port ' + config.port);
});

function broadCast(client, data){
    
    clients.forEach(function(socket){
        if(socket != client){
            socket.write(getName(socket) + ' says : ' + data);
        }
    });
}

function getName(socket){
    return socket.remoteAddress + ' : ' + socket.remotePort;
}