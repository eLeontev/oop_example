function User (userName, network) {
    this.userName = userName;
    this.network = network;
}

User.prototype.enterInNetwok = function () {
    if (this.network.connectToNetwork(this.userName)) {
        console.log(this.userName + ' had entered');
    }
};

User.prototype.enterOnServer = function (serverIP) {
    if (this.network.isServerAvailable(serverIP)) {
        this.serverIP = serverIP;
        this.network.goToServer(serverIP, this.userName);
        console.log(this.userName + ' connected to server');
    } 
};

User.prototype.exitFormServer = function () {
    if (this.serverIP) {
        this.network.exitFromServer(this.serverIP, this.userName);
        this.serverIP = null;
        console.log(this.userName + ' disconnected from server');
    }
};

module.exports = User;