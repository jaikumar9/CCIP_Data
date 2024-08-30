const { ethers } = require("hardhat");

// Deploy the Sender contract to Sepolia Ethereum 
// Transferig the info/ Funds from Eth sepolia to Test BNB.
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const routerAddress = "0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59"; // router address which is deployed on Sepolia Ethereum
    const linkAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";    // Link token address which is deployed on Sepolia Ethereum for Gas

    const Sender = await ethers.getContractFactory("Sender");
    const sender = await Sender.deploy(routerAddress, linkAddress);

    console.log("Sender contract deployed at:", sender.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    //  Deployed the Sender contract to Ethereum Sepolia = 
    //  0x0aFe258775341f9Fb75eED0F2C04894e705f44D9
   
    // Verifying the Sender contract on Etherscan = npx hardhat verify --network ethereumSepolia 0x0aFe258775341f9Fb75eED0F2C04894e705f44D9 "0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59" "0x779877A7B0D9E8603169DdbD7836e478b4624789"
    // https://repo.sourcify.dev/contracts/full_match/11155111/0x0aFe258775341f9Fb75eED0F2C04894e705f44D9/