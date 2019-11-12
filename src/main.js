const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("a02d13e2a9c01cd8a1cf60eb8f884417183f37c982198193a42b1c2b0f16ce82");
const myWalletAddress = myKey.getPublic('hex');

let energyCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
energyCoin.addTransaction(tx1);

console.log("\nStarting the miner...");
energyCoin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of test is", energyCoin.getBalanceOfAddress(myWalletAddress));

energyCoin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid?", energyCoin.isValid());