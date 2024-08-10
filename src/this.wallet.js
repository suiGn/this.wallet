import crypto from 'crypto';
import Account from './account.js';
/**
 * Class representing a Wallet containing multiple Accounts.
 */
class Wallet {
  /**
   * Create a new Wallet instance.
   * @param {string} walletName - The name of the wallet.
   * @param {string} hash - A hash that acts as a unique identifier for the wallet.
   */
  constructor(walletName, hash) {
    this.walletId = this.generateHash(walletName, hash);  // Generate and store walletId
    this.accounts = {}; // Stores accounts by name
  }

  /**
   * Create a new account with pre-built addresses and add it to the wallet.
   * @param {string} accountName - The name of the account to create.
   * @returns {Account} - The created account with pre-built addresses.
   */
  createAccount(accountName) {
    const account = new Account();  // Instantiate a new Account
    this.accounts[accountName] = account;
    return account;
  }

  /**
   * Get an account by its name.
   * @param {string} accountName - The name of the account to retrieve.
   * @returns {Account} - The requested account.
   */
  getAccount(accountName) {
    return this.accounts[accountName];
  }

  /**
   * Generate a cryptographic hash based on the wallet name and the provided hash.
   * This acts as a unique identifier for the wallet.
   * @param {string} walletName - The name of the wallet.
   * @param {string} hash - The hash to combine with the wallet name.
   * @returns {string} - The resulting hash.
   */
  generateHash(walletName, hash) {
    const combined = `${walletName}${hash}`;
    return crypto.createHash('sha256').update(combined).digest('hex');
  }

  /**
   * Get the wallet structure with all accounts and their blockchains.
   * @returns {Object} - The wallet structure.
   */
  getWalletStructure() {
    return {
      walletId: this.walletId,
      accounts: this.accounts
    };
  }
}

export default Wallet;