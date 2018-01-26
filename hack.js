const Blockchain = require('./blockchain')

const blockchain = new Blockchain()

blockchain.blocks[1].data.amount = 30000
console.log(blockchain)
console.log(blockchain.isValid())