var User = require('./user.js');
var Server = require('./server.js');
var Network = require('./network.js');

var network = new Network();

var Bob = new User('Bob', network);
var John = new User('John', network);

var server = new Server(network);

Bob.enterInNetwok();
John.enterInNetwok();

server.connectToNetwork();

Bob.enterOnServer(13);
John.enterOnServer(13);

Bob.exitFormServer();
John.exitFormServer();

server.disconnectFromNetwork();
