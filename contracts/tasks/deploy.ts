import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
require('dotenv').config();

task('deploy', 'Deploys our contract')
  .setAction(async (args, hre: HardhatRuntimeEnvironment) => {
    const factory = await hre.ethers.getContractFactory('Payright');
    console.log('Deploying contract...');

    const contract = await factory.deploy();
    const dt = contract.deploymentTransaction();
    console.log('Deployment transaction hash:', dt!.hash);

    await contract.waitForDeployment();
    const contractAddress = await contract.getAddress();

    console.log('Contract deployed to address:', contractAddress);
  });
