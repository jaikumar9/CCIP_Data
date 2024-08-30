const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const routerAddress = "0xE1053aE1857476f36A3C62580FF9b016E8EE8F6f"; // router address which is deployed on BNB Testnet

    const Receiver = await ethers.getContractFactory("Receiver");
    const receiver = await Receiver.deploy(routerAddress);

    console.log("Receiver contract deployed at:", receiver.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


 // Deployed the Receiver contract to BNB Testnet = 
 // 0x04654ead0dF789D2Ee7Fd080200bAc2645C55C98

 // verify receiver contract on BNB Testnet = 
 // npx hardhat verify --network tbnb 0x04654ead0dF789D2Ee7Fd080200bAc2645C55C98 "0xE1053aE1857476f36A3C62580FF9b016E8EE8F6f"

// https://testnet.bscscan.com/address/0x04654ead0dF789D2Ee7Fd080200bAc2645C55C98#code