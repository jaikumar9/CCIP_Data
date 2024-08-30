require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require("@nomicfoundation/hardhat-verify");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHEREUM_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL;
const TBNB_RPC_URL = process.env.TBNB_RPC_URL;
// const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;

const config = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    ethereumSepolia: {
      url: ETHEREUM_SEPOLIA_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
    tbnb: {
      url: TBNB_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 97,
    },
  },
  typechain: {
    externalArtifacts: ["./abi/*.json"],
  },
  sourcify: {
    enabled: true
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY
    }
  },


};

module.exports = config;