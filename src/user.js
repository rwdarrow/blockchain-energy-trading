const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const Transaction = require('./blockchain');

class User {
  constructor(username, password) {
    this.username = username
    this.password = password
    this.key = ec.genKeyPair()
    this.privateKey = key.getPrivate('hex')
    this.publicKey = key.getPublic('hex')
    this.walletAddress = this.publicKey
  }

  buyTokens(amount) {
    const tx1 = new Transaction(this.walletAddress, '', amount);
    tx1.signTransaction(this.privateKey);
    energyCoin.addTransaction(tx1);
  }
}