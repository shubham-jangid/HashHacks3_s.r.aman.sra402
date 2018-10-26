const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('../compile');

const provider = new HDWalletProvider(
    'together segment cart logic hedgehog flavor huge steak noise brain various palace',
     'https://rinkeby.infura.io/v3/3d13706647bd46138b410e8ea6da9c53'
    )

const web3 = new Web3(provider)

const deploy = async()=>{
   const accounts = await web3.eth.getAccounts()
   console.log(accounts[0]);
   const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:'0x'+ bytecode,arguments:['hi']})
        .send({gas:'1000000',from:accounts[0]})
         console.log('contract deployed to',result.options.address);

}
deploy()