var User = require('./user.js');
var Server = require('./server.js');
var Network = require('./network.js');

var serverAdress = 13;

var network = new Network();

var Bob = new User('Bob', network);
var John = new User('John', network);

var server = new Server(network);

Bob.enterInNetwok();
John.enterInNetwok();

server.connectToNetwork();

Bob.enterOnServer(serverAdress);
John.enterOnServer(serverAdress);

Bob.exitFormServer();
John.exitFormServer();

server.disconnectFromNetwork();
