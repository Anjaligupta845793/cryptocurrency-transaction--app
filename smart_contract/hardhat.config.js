require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;


module.exports = {
  solidity: '0.8.0',
  networks: {
   sepolia: {
        url:API_URL,
        accounts: [`0x${PRIVATE_KEY}`],
        chainId:11155111,
     }
  },
};
//0x8D364C287C9CEA5A702cAef1b2b56b1c8881a195
//