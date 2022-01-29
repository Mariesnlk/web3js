const Web3 = require('web3')

const wss = 'wss://mainnet.infura.io/ws'
const web3 = new Web3(wss)

// subscribe for specific event
pregnant_event = 'Pregnant(address,uint256,uint256,uint256)'
pregnant_event_hashed = web3.utils.sha3(pregnant_event)
console.log(pregnant_event_hashed)


web3.eth.subscribe('logs', {
    address: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
    topics: ['0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80'],
    fromBlock: 'latest'
}, (error, log) => {
    if (!error) {
        console.log(log)
    }
})