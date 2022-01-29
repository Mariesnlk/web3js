let Web3 = require('web3')

let wss = 'wss://mainnet.infura.io/ws'
let web3 = new Web3(wss)

web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
    if (!error) {
        console.log(blockHeader)
    }
    else {
        console.log(error)
    }
})