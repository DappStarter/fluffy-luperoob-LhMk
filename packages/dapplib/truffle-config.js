require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid glove flower smooth name renew still arrow include kiwi sudden general'; 
let testAccounts = [
"0x2a235e6aec56d40da027a967afb505c5f6381a76c9715e65e732da8d8cf62aec",
"0x3f1bf69480693cc3e547afd9cda94a7eb939244809d9bfc08d46e89c06ddf842",
"0xaa22191d5f542b130bb04fcce1e76e68ae1e99b5c69f1494831eebfddc43073b",
"0xba0e45a0f433050182add6599215dd00a22092734832332b416080f8a67ed761",
"0xe85c434ade957778435dfd97fa7c155fc0e9a1de6793a952ca521c3c11c5114f",
"0x9eb1dce8a62f2ef834763ec3f1e47e3d797c4f9124b3f8638f36c8f6a79c18c1",
"0x35623349919f277777c67e75c936b220f38151d8d3e1ae182d80a9429e00e587",
"0x97f4e1696df9322d3952a7ebc3850cd4ccfa69c45f078d606fed5f597056186b",
"0x71248a7e0e7797b2b39f35e93460c188014b9e902de638aecf84857ffe586e19",
"0xf72678f76394e9f085f5ac5915707b9295d608903c23359c0db993cfb45953cf"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


