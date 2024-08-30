const { ethers } = require("hardhat");

async function main() {
    const senderAddress = "0x0aFe258775341f9Fb75eED0F2C04894e705f44D9";   // Sender Address on Sepolia Ethereum
    const sender = await ethers.getContractAt("Sender", senderAddress);

    // Use ethers.BigNumber.from() to create a BigNumber
    const destinationChainSelector = ethers.BigNumber.from("13264668187771770619");
    const receiverAddress = "0x04654ead0dF789D2Ee7Fd080200bAc2645C55C98";   // Reciver Address on BNB Testnet
    const textToSend = "Hello, I'm Jai from Eth Sepolia! take me to the Test BNB";

    const tx = await sender.sendMessage(destinationChainSelector, receiverAddress, textToSend);
    await tx.wait();
    console.log(tx);
    console.log("Message sent with tx:", tx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// To Run this Script = npx hardhat run tasks/sendMessage.js --network ethereumSepolia

// Message sent with tx: 0x1113984d5cb6b35e69effdfe60ada000c12342e835a2a7e36c9a451a9b80d494
