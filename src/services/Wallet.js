import { includes } from "lodash";
import EthWallet from "./EthereumWallet";
import NeoWallet from "./NeoWallet";

const networks = {
  BTC: 0,
  NEO: 888,
  ETH: 60
};

export default class Wallet {
  constructor(root) {
    this.root = root;
  }

  deriveWallet = (network, index, account, change) => {
    if (!includes(networks, network))
      throw new Error("No valid network was given.");

    return this.root
      .deriveHardened(44) // Purpose (bip44)
      .deriveHardened(network) // Coin type https://github.com/satoshilabs/slips/blob/master/slip-0044.md
      .deriveHardened(account) // Account (different account levels)
      .derive(change) // Change (0 = external, 1 = internal chain)
      .derive(index); // Address index
  };

  getEthWallet = (index, account = 0, change = 0) => {
    const child = this.deriveWallet(networks.ETH, index, account, change);
    return new EthWallet(child).getWallet();
  };

  getNeoWallet = (index, account = 0, change = 0) => {
    const child = this.deriveWallet(networks.NEO, index, account, change);
    return new NeoWallet(child).getWallet();
  };
}

// function EthereumHDKey() {}

// /*
//  * Horrible wrapping.
//  */
// function fromHDKey(hdkey) {
//   const ret = new EthereumHDKey();
//   ret._hdkey = hdkey;
//   return ret;
// }

// EthereumHDKey.fromMasterSeed = function(seedBuffer) {
//   return fromHDKey(HDKey.fromMasterSeed(seedBuffer));
// };

// EthereumHDKey.fromExtendedKey = function(base58key) {
//   return fromHDKey(HDKey.fromExtendedKey(base58key));
// };

// EthereumHDKey.prototype.privateExtendedKey = function() {
//   if (!this._hdkey.privateExtendedKey) {
//     throw new Error("This is a public key only wallet");
//   }
//   return this._hdkey.privateExtendedKey;
// };

// EthereumHDKey.prototype.publicExtendedKey = function() {
//   return this._hdkey.publicExtendedKey;
// };

// EthereumHDKey.prototype.derivePath = function(path) {
//   return fromHDKey(this._hdkey.derive(path));
// };

// EthereumHDKey.prototype.deriveChild = function(index) {
//   return fromHDKey(this._hdkey.deriveChild(index));
// };

// EthereumHDKey.prototype.getWallet = function() {
//   if (this._hdkey._privateKey) {
//     return Wallet.fromPrivateKey(this._hdkey._privateKey);
//   }
//   return Wallet.fromPublicKey(this._hdkey._publicKey, true);
// };

// module.exports = EthereumHDKey;
