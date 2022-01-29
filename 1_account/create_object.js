let Web3 = require('web3')

// generate local blockchain (Ganache)
let url_ganache = 'http://127.0.0.1:7545'

// Infura
let url_infura = 'https://mainnet.infura.io/v3/17425404118d470ab61c1cded765a510'

//let web3 = new Web3(url_ganache)
let web3 = new Web3(url_infura)

console.log(web3)