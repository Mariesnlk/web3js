let Web3 = require('web3')

let url = 'https://mainnet.infura.io/v3/17425404118d470ab61c1cded765a510'
let web3 = new Web3(url)

web3.eth.getBlockNumber().then((result) => {
    console.log(result)
})

// parameter is a number of block from previous funct
// get all details info about this block
web3.eth.getBlock(14090096).then((block) => {
    console.log(block)
})

web3.eth.getBlockNumber().then((result) => {
    for (let i = 0; i < 100; i++) {
        web3.eth.getBlock(result - i).then((block) => {
            console.log(block.number)
        })
    }
})

web3.eth.getBlock('latest').then((block) => {
    console.log(block.number)
})

// coming in block 
web3.eth.getBlock('pending').then((block) => {
    console.log(block.number)
})

web3.eth.getBlock('0x4dd58b45e691ccf390e17aba4ad4cb5fef87c23c0057f0570549518bdc6bf1ba').then((block) => {
    console.log(block.number)
})

// get transaction from block
// params: block number, index of transaction wonna get
web3.eth.getTransactionFromBlock(14090144, 2).then(console.log)