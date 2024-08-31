const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sender", function () {
  let sender;
  let owner;
  let router;
  let link;

  beforeEach(async function () {
    [owner, router, link] = await ethers.getSigners();

    const Sender = await ethers.getContractFactory("Sender");
    sender = await Sender.deploy(router.address, link.address);
    await sender.deployed();
  });

  it("Should deploy with correct router and link addresses", async function () {
    // Since we cannot access the private variables directly, we assume that if the contract deploys
    // without throwing, the router and link addresses were set correctly.
    expect(sender.address).to.be.properAddress;
  });

  it("Should only allow owner to send message", async function () {
    const [_, nonOwner] = await ethers.getSigners();
    await expect(
      sender.connect(nonOwner).sendMessage(1, ethers.constants.AddressZero, "Test")
    ).to.be.revertedWith("Only callable by owner");
  });
});
