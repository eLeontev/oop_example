function Server (network) {
    this.network = network;
    this.users = [];
}

Server.prototype.getIP = function () {
    return this.IP;
};

Server.prototype.getAPI = function () {
    var logoutUser = function (userName) {
        this.users = this.users.filter(function (user) {
            return user === userName;
        });

        console.log(userName + ' logout from server');
    };
    
    var connectUser = function (userName) {
        this.users.push(userName);
        console.log(userName + ' login to server');
    };

    return {
        getIP: this.getIP.bind(this),
        logoutUser: logoutUser.bind(this),
        connectUser: connectUser.bind(this),
    }
};

Server.prototype.connectToNetwork = function () {
    this.IP = this.network.getAvailableIP();
    this.network.connectServer(this.getAPI());
    console.log('server connected');
};

Server.prototype.disconnectFromNetwork = function () {
    this.network.disconnectServer(this.getIP());
    console.log('server disconnected');
};

module.exports = Server;
