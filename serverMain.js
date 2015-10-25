var express = require('express');

var app = express();

var http = require('http').Server(app);

var clientServices = require('./Client/client')(app);
var dataServices = require('./Data/data')(app, http);

http.listen(3000, function(){

});
