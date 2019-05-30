const Colibri_Token = artifacts.require("Colibri_Token");
const BigNumber = require('bignumber.js');
const truffleConfig = require('../truffle-config');

const Web3 = require('web3');

contract('Colibri_Token', (accounts) => {

    let owner, recepient;

    const myWeb3 = new Web3(new Web3.providers.HttpProvider(truffleConfig.infuraLink));
    //const web3 = new Web3(Web3.givenProvider);
    //const myWeb3 = new Web3(Web3.currentProvider)


    console.log('myWeb3 currentProvider', myWeb3.wallets);

    before('Small test', () => {
        assert.isAtLeast(accounts.length, 2, "Must two");
        owner = accounts[0];
        recepient = accounts[1];
    });

    // First Test
    it('Test1', async () => {

        const instance = await Colibri_Token.deployed();
        console.log('accounts[1] ', accounts[1]);
        //console.log('instance ', instance);
        let balance = await instance.balanceOf(accounts[0]);
        let balance1 = await instance.balanceOf(accounts[1]);

        const totalSupply = await instance._totalSupply();

        console.log('New balance of 1 Before ', parseInt(balance1.toString()));
        console.log('New balance of 0 Before ', parseInt(balance.toString()));

        console.log('*************************************** ', parseInt(totalSupply.toString()) );

        assert.strictEqual(parseInt(balance.toString()) , 4e+26, "The owner don't have token to send ");

    });

    it('Transfert of token', async () => {
        const instance = await Colibri_Token.deployed();

        const amount = new BigNumber(300000000000000000000000000);
        const accountOne = accounts[0];
        const accountTwo = accounts[1];
        const result = await instance.transfer(accountTwo, 300000000000000000000000000, {from: accountOne});

        //console.log("result ", result);

        const balance = await instance.balanceOf(accounts[0]);
        const balance1 = await instance.balanceOf(accounts[1]);

        console.log('New balance of 1 After ', parseInt(balance1.toString()));
        console.log('New balance of 0 After ', (balance.toString()));


        assert.strictEqual(parseInt(balance.toString()) , 2e+26, "Error of balancing ");
    });


}) ;