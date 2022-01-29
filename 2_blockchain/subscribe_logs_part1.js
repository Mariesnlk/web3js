const Web3 = require('web3')

const wss = 'wss://mainnet.infura.io/ws'
const web3 = new Web3(wss)

web3.eth.subscribe('logs', {}, (error, log) => {
    if (!error) {
        console.log(log)
    }
})

// subscribe for all events that happen in CryptoKitties contract
web3.eth.subscribe('logs', {
    address: '0x06012c8cf97bead5deae237070f9587f8e7a266d'
}, (error, log) => {
    if (!error) {
        console.log(log)
    }
})