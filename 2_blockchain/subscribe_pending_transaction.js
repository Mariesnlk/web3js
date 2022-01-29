const Web3 = require('web3')

const wss = 'wss://mainnet.infura.io/ws'
const web3 = new Web3(wss)

web3.eth.subscribe('pendingTransactions', (error, transactionHash) => {
    if (!error) {
        console.log(transactionHash)
        web3.eth.getTransaction(transactionHash, (error, tx) => {
            if (tx != null) {
                //console.log(tx)
                // failer transaction >= 1eth
                if (tx.value >= 1000000000000000000) {
                    console.log(transactionHash)
                    console.log(web3.utils.fromWei(tx.value, 'ether'), 'ether')

                }
            }
        })

    }
    else {
        console.log(error)
    }
})