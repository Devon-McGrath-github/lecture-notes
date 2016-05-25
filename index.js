var express = require('express')
var bodyParser = require('body-parser')

var routes = require('routes')

var app = express()
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded())

app.get('/addName', routes.index)

app.listen(PORT, function () {
  console.log('The server is listening on:', PORT)
})
