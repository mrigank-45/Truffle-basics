const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require('truffle-assertions');

contract("Spacebear", (accounts) => {                               // you can name it whatever you want.
    it('should credit an NFT to a specific account', async () => {  // each test starts with it keyword.
        const spacebearInstance = await Spacebear.deployed();       // create a new intance of smart contract
        let txResult = await spacebearInstance.safeMint(accounts[1],"spacebear_1.json");

        truffleAssert.eventEmitted(txResult, 'Transfer', {from: '0x0000000000000000000000000000000000000000', to: accounts[1], tokenId: web3.utils.toBN("0")});

        // assert.equal(await spacebearInstance.ownerOf(0), accounts[1], "Owner of Token is the wrong address");

        // to make it fail
        // assert.equal(await spacebearInstance.ownerOf(0), accounts[0], "Owner of Token is the wrong address"); 
    })
})
