import * as bitcoin from 'bitcoinjs-lib';
import * as crypto from 'crypto';
// Generate a random private key
const keyPair = bitcoin.ECPair.makeRandom({ rng: crypto.randomBytes });
// Get the public key in a compressed format
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
console.log("Bitcoin Address:", address);
console.log("Private Key (WIF):", keyPair.toWIF());