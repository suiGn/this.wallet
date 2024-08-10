import Wallet from './this.wallet.js';
// Create a new Wallet instance
const wallet = new Wallet('myWallet', 'secureHash');
// Create a new account within the wallet
wallet.createAccount('account001');
// Get the wallet structure
console.log(wallet.getWalletStructure());