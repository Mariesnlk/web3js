var Tx = require("ethereumjs-tx").Transaction
const Web3 = require('web3')
const url_ropsten = 'https://ropsten.infura.io/v3/9da4f824c3d24b44bb9c7245a64472de'

const web3 = new Web3(url_ropsten)

const account1 = '0xF8e2D0222c01668D7f7cfE38fcf0F41C30B4424c'
const account2 = '0xf14d67519897f709324e5D46C49458Fbb4ca071e'

const privateKey1 = Buffer.from('pK for address 1', 'hex')

const contract_address = "0x..."
const contract_abi = []
const contract = new web3.eth.Contract(contract_abi, contract_address)

web3.eth.getTransactionCount(account1, (error, txCount) => {
    const data = contract.methods.vote(1).encodeABI()

    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: contract_address,
        gasLimit: web3.utils.toHex(1000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: data
    }

    const tx = new Tx(txObject)
    tx.sign(privateKey1)

    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    web3.eth.sendSignedTransaction(raw, (error, txHash) => {
        console.log(txHash)
    })
})
