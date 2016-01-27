//console.log('May the Force be with You')

var express 	= require('express')
	bodyParser  = require('body-parser')
	MongoClient = require('mongodb').MongoClient
	app			= express()

//get request for READ operation
app.get('/', function(req, res) {
  res.sendFile('/Users/brandon/Desktop/quote-app/quote_kings/index.html')
})

app.post('/quotes', function(req, res) {
  console.log('Hellooooooooooooooooo!')
})



app.listen(3000, function() {
  console.log('listening on 3000')
})