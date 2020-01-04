var express= require('express');
var server = express();
var server_controller = require('./controller/server_controller.js');

server.set('view engine', 'ejs');

server.use(express.static(__dirname+'/static/'));
server_controller.request_handler(server);

server.listen(3000, function(){console.log('Listening on port 3000')});
