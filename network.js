function Network() {
    this.domen = 10;
    this.users = [];
    this.servers = [];
}

Network.prototype.connectToNetwork = function (userName) {
    var isExist = this.users.some(function (networkUser) {
        return networkUser === userName;
    }); 

    if (!isExist) {
        this.users.push(userName);
        return this.getAvailableIP();
    }
};

Network.prototype.isServerAvailable = function (IP) {
    return this.servers.some(function (serverAPI) {
        return serverAPI.getIP() === IP;
    }); 
};

Network.prototype.goToServer = function (serverIP, userName) {
    this._getServer(serverIP).connectUser(userName);
};

Network.prototype.exitFromServer = function (serverIP, userName) {
    this._getServer(serverIP).logoutUser(userName);
};

Network.prototype.connectServer = function (serverAPI) {
    this.servers.push(serverAPI);
};

Network.prototype.disconnectServer = function (IP) {
    this.servers = this.servers.filter(function (serverAPI) {
        return serverAPI.getIP() !== IP;
    });
};

Network.prototype._getServer = function (IP) {
    return this.servers.reduce(function (searchedserverAPI, currentserverAPI) {
        if (!searchedserverAPI) {
            searchedserverAPI = currentserverAPI.getIP() === IP ? currentserverAPI : null;
        }

        return searchedserverAPI;
    }, null);
};

Network.prototype.getAvailableIP = function () {
    this.domen += 1;
    
    return this.domen; 
};

module.exports = Network;