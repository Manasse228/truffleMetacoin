const Owned = artifacts.require("Owned");
const SafeMath = artifacts.require("SafeMath");
const Colibri_Token = artifacts.require("Colibri_Token");


module.exports = function(deployer, network, accounts) {
console.log('accounts correct ', accounts, network);
    deployer.deploy(Owned);
    deployer.link(Owned, Colibri_Token);
    deployer.deploy(SafeMath);
    deployer.link(SafeMath, Colibri_Token);
    deployer.deploy(Colibri_Token);
};