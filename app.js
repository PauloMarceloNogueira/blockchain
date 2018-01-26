const express = require('express')
const app = express()
const Blockchain = require('./blockchain')

const blockchain = new Blockchain()

app.get('/show', (request, response) => {
	console.log(blockchain)
})
app.get('/new', (request, response) => {
  blockchain.addBlock({amount: 4})
})

app.listen(3000)