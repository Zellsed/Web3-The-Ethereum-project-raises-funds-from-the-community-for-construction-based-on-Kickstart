const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');

//Ensure that the 'build' directory is empty or does not exist.
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

//Used to ensure that the 'build' directory exists.
fs.ensureDirSync(buildPath);

//console.log(output);

for (let contract in output) {
    const contractName = contract.replace(/[^a-zA-Z0-9]/g, ''); // Remove invalid characters
    fs.outputJsonSync(
        path.resolve(buildPath, contractName + '.json'),
        output[contract]
    );
}