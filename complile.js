const path = require('path');
const fs = require('fs');
const solc = require('solc');

const indexPath = path.resolve(__dirname, 'contract', 'HealthCare.sol');
const source = fs.readFileSync(indexPath, 'utf8');
solc.compile(source, 1);

// module.exports = solc.compile(source, 1).contracts[':Lottery'];
 