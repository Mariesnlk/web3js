const Tx = require('ethereumjs-tx')
const Web3 = require('web3')

const url_ropsten = 'https://ropsten.infura.io/v3/9da4f824c3d24b44bb9c7245a64472de'
const web3 = new Web3(url_ropsten)

// console.log(web3.eth.accounts.create())
// console.log(web3.eth.accounts.create())

/*

{
  address: '0x55009D62a4EBE3DE17F601b6421975b7125DebeF',
  privateKey: '0xb66181d5fe1ba9632cd272891414bf041e8bae4ae73f0c5e18779cc45a68c8f8',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt]
}
{
  address: '0xa083fBf4f0f6d5EDc3E0D860841dA140c8798851',
  privateKey: '0x33ec075a56b56e8bf58c380f3d7283f6675a2f290029b72d3b71bbf40f399a36',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt]
}

*/

const account1 = '0x55009D62a4EBE3DE17F601b6421975b7125DebeF'
const privateKey1 = Buffer.from('0xb66181d5fe1ba9632cd272891414bf041e8bae4ae73f0c5e18779cc45a68c8f8')
const account2 = '0xa083fBf4f0f6d5EDc3E0D860841dA140c8798851'

web3.eth.getBalance(account1, (error, balance) => {
    console.log(balance)
})