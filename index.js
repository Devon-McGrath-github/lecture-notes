var express = require('express')
var bodyParser = require('body-parser')

var routes = require('./routes')

var PORT = process.env.PORT || 3000
var app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded()) //must use urlencoded it won't
  // work with forms otherwise

app.post('/add-name', routes.addName)

app.listen(PORT, function () {
  console.log('The server is listening on:', PORT)
})
