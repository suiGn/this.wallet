class Account {
    constructor() {
      this.blockchain = {
        ethereum: {
          address: "0xYourEthereumAddress",
          privateKey: "0xYourEthereumPrivateKey"
        },
        bitcoin: {
          address: "1YourBitcoinAddress",
          privateKey: "YourBitcoinPrivateKeyInWIF"
        },
        stellar: {
          publicKey: "YourStellarPublicKey",
          secret: "YourStellarSecretKey"
        }
      };
    }
  }
  
  export default Account;