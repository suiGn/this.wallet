let whales = {};
// if (wallet.balance > averageNetworkBalance) whales.push(wallet);

class Whale {
    constructor(wallet, type, description) {
      this.wallet = wallet;
      this.type = type;
      this.description = description;
      this.portfolio = {};
      this.harmonics = 0;
    }
  
    // Method to add assets to the whale's portfolio
    addToPortfolio(asset, quantity) {
      if (this.portfolio[asset]) {
        this.portfolio[asset] += quantity;
      } else {
        this.portfolio[asset] = quantity;
      }
    }
  
    // Method to calculate harmonics based on the portfolio
    calculateHarmonics() {
      // Simplified harmonic calculation based on portfolio values
      this.harmonics = Object.keys(this.portfolio).length * Math.random();
      return this.harmonics;
    }
  
    // Method to get the whale's portfolio
    getPortfolio() {
      return this.portfolio;
    }
  
    // Method to get the whale's harmonics
    getHarmonics() {
      return this.harmonics;
    }
  
    // Method to print whale details
    printDetails() {
      console.log(`Whale Account: ${this.name}`);
      console.log(`Type: ${this.type}`);
      console.log(`Description: ${this.description}`);
      console.log(`Portfolio:`, this.portfolio);
      console.log(`Harmonics: ${this.harmonics}`);
    }
  }
  
  export default Whale;