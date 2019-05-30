
const HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "taxi issue cloth glare swallow hip element robust night alter mango air";

var privateKeys = [
    "06D26E8EE421F346E8E30A5E9A9B410DF9F41A25390DE61322C0CB1D3C549A36",
    "40872703EF6BEC757507A9933BCBEA85C2DCE570D4001E5BB6BE516F9328AE9F",
];

module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  /*
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  }
  */
    infuraLink: "https://rinkeby.infura.io/v3/2a34a52796fa441ea6a31cbcb7a40e81",
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        proxy: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "*",
            gasPrice: 0
        },
        rinkeby: {
            provider: function () {
                // le 0, 2 c'est pour dire d'importer la première addresse et 2 est le nombre d'addresse à importer
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/2a34a52796fa441ea6a31cbcb7a40e81", 0, 5);
                //return new HDWalletProvider(privateKeys, "https://rinkeby.infura.io/v3/2a34a52796fa441ea6a31cbcb7a40e81", 0, 2);
            },
            network_id: "4",

            gas: 4500000,
            gasPrice: 10000000000,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.0',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
};

