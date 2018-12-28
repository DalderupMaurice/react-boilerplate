import bip39 from "bip39";
import bip32 from "bip32";
import Wallet from "./Wallet";

import Connection from "../__utils__/Connection";
import { LS_USER } from "../__utils__/Constants";

class AuthService {
  constructor(baseURL) {
    this.connection = new Connection(baseURL);
  }

  register = user => this.connection.post("/auth/register", user);

  login = async user => {
    // const { _doc: currentUser } = await this.connection.post(
    //   "/auth/login",
    //   user
    // );

    // Generate bip39 Mnemonic - 256-bits entropy (24-word long mnemonic)
    // const mnemonic = bip39.generateMnemonic(256);

    // Deterministically generate a 512 bit seed hex seed
    const seed = bip39.mnemonicToSeed(user.username); // username = mnemonic

    // Deterministically create a bip32 master key, which can be used to create child keys in the manner specified by bip44.
    const root = bip32.fromSeed(seed);

    const x = new Wallet(root);
    const ethWallet = x.getEthWallet(0);
    const neoWallet = x.getNeoWallet(0);

    return {
      ethWallet,
      neoWallet,
      isAuthenticated: true
    };
    // console.log(parseInt(`0x${bip44Constants.NEO.toString(16)}`, 16));
    // // m / purpose' / coin_type' / account' / change / address_index
    // const child = root
    //   .deriveHardened(44) // Purpose (bip44)
    //   .deriveHardened(parseInt(`0x${bip44Constants.NEO.toString(16)}`, 16)) // Coin type https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    //   .deriveHardened(0) // Account (different account levels)
    //   .derive(0) // Change (0 = external, 1 = internal chain)
    //   .derive(0); // Address index

    // console.log(child);
    // console.log(child.publicKey.toString("hex"));
    // console.log("wif", child.toWIF());

    // console.log(
    //   "========================",
    //   wallet.getPrivateKeyFromWIF(child.toWIF())
    // );
    // console.log(
    //   wallet.getAddressFromScriptHash(
    //     wallet.getScriptHashFromPublicKey(
    //       wallet.getPublicKeyFromPrivateKey(
    //         wallet.getPrivateKeyFromWIF(child.toWIF())
    //       )
    //     )
    //   )
    // );

    // const i = root2.derivePath("m/44'/0'/0'/0/0").getWallet();
    // console.log("direved", i);
    // console.log("getaaddress", i.getAddress());
    // console.log("getAddresstring", i.getAddressString());
    // console.log("getAddressToString", i.getAddress().toString("hex"));
    // console.log("getPrivateKeyString", i.getPrivateKeyString());
    // console.log("getPublicKeyString", i.getPublicKeyString());

    // const i2 = root2.derivePath("m/888'/0'/0'/0/0").getWallet();
    // console.log("foiejfoiewjfioejwfioewj", i2.getAddressString());
    // console.log("getPrivateKeyString", i2.getPrivateKeyString());

    // if (!bip39.validateMnemonic(mnemonic)) {
    //   throw new Error("Mnemonic invalid or undefined");
    // }
    // this.hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
    // const wallet = this.hdwallet.derivePath(this.wallet_hdpath + i).getWallet();

    /*
      fromBase58,
  fromPrivateKey,
  fromPublicKey,
  fromSeed
    */

    // if (user.remember) {
    //   localStorage.setItem(
    //     LS_USER,
    //     JSON.stringify({
    //       ...currentUser,
    //       password: user.password
    //     })
    //   );
    // }

    // return {
    //   ...currentUser,
    //   isAuthenticated: true
    // };
  };

  restoreSession = () => {
    const userFromStore = JSON.parse(localStorage.getItem(LS_USER));
    const isAuthenticated = !!userFromStore;
    return {
      ...userFromStore,
      isAuthenticated
    };
  };

  logout = () => {
    localStorage.clear();
    return { isAuthenticated: false };
  };
}

const instance = new AuthService();
Object.freeze(instance);

export default AuthService;
