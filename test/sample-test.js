const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MintingContract", function () {
  it("Should mint Document as NFT", async function () {
      const Factory = await ethers.getContractFactory("StartCertificates")
      const factory = await Factory.deploy()
      await factory.deployed()

      const recipient = '0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199'
      const metadataURI = 'test.png'

      let balance = await factory.balanceOf(recipient)
      expect(balance).to.equal(0);

      const newlyMintedToken = await factory.payToMint(recipient, metadataURI, {value: ethers.utils.parseEther('0.01')})

      // waits till minted
      await newlyMintedToken.wait();

      balance = await factory.balanceOf(recipient)
      expect(balance).to.equal(1)

      //expect(await factory.isContentOwned(metadataURI)).to.equal(true);

    });
});
