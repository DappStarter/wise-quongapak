require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot blanket response ridge umbrella idea area slot gaze'; 
let testAccounts = [
"0x8c3931eb34467da08fe55f7f3ff467df29ddc89fb24d56dc42d4f4db7d6d0710",
"0x26652c63a453268fe16f9cb6e91790bb3725be217df337950cc75b9c3433cd15",
"0x1b8b929f97e0d4d00872d87081bcd06f751a04e8543d025a44b38dc6f2f30359",
"0x60e3bfbf4d10416406a7b30c2aeafbf55c976b05fd094665080feb9ae8a8535f",
"0xde4cc414caf51d37a3df2fd801b56dbb5db7b5715fddb45015f64fd47c0de522",
"0xf4d3a6cd4a0d04ba8aa09fc56050b384ba7f038596190207732393a7748ccc15",
"0x315e5ad63fc9caf5d92dfdbf0faa317418bb4b57c40e9c883ba8bf8c824498fa",
"0xe32ae4fa72568355745192f932de582588282e127d13f78875970af1041af795",
"0x396bd06b70352ea40d6c2346210d9de9e80b0a1656515d9d22f3e16eeb6c7fd2",
"0x00c0aec812133a920712a6c823e1aaa2c22d0359496789c27c3b4595e3d26389"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
