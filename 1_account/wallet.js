let Web3 = require('web3')

let url = 'https://mainnet.infura.io/v3/17425404118d470ab61c1cded765a510'
let web3 = new Web3(url)

let wallet = web3.eth.accounts.wallet.create(2, 'some random string')

// generate(created) 2 accounts
let account = web3.eth.accounts.create()

// add one more
wallet.add(account.privateKey)

console.log(wallet)
