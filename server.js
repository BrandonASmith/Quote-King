//console.log('May the Force be with You')

var express 	= require('express')
	bodyParser  = require('body-parser')
	MongoClient = require('mongodb').MongoClient
	app			= express()



app.listen(3000, function() {
  console.log('listening on 3000')
})