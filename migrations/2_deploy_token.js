// migrations/2_deploy_token.js
const MyToken = artifacts.require('MoeToken');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(MyToken, ['MOE Token', 'MOE', '100000000000000000000000000'], { deployer, initializer: 'initialize' });
};