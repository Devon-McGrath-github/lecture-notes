mkdir dep - demo
cd dep - demo
npm Init
git init
npm i express--save // i = install
echo "node_modules" > .gitignore
  // npm i tape --save-dev
  // if you want to do tests with tape

touch server.js - "start": "node server.js" // under scripts
  // what the hell does the start bit do
  //




// in server.js
var express = require('express')

var PORT = process.env.PORT || 3000 //3000 for local testing
  // process environment
var app = express()

// this is our route
app.get('/', function (req, res) {
  res.send('Congratulations! You have deployed')
})

// initializes the port that the local host should look for
app.listen(PORT, function () {
  console.log('Web app is listening on port', PORT)
})





Procfile //a haroku thing
// no extension neccessary
web: node server.js

// the page on heroku is helpful

//download heroku toolbelt and install, then login thru terminal
//heroku already installed on Don's laptop
//requires a heroku account
//
// all the versions of node are recent enough to becompatible
// it has not been installed on our computers yet
// one installed will need to login
// it should prompt with a heroku login

// has us clone a repo.
// this is a getting started repo??

  (create an app that automatically completes these requiests)

//create the app
//in terminal
heroku create simple - heroku - node - test

git remote - v
  // -v stands for verbose
  // verbose shows the path
  // it will be heroku, not the normal github paths



type alias in terminal
  // list of alias's

gaa //git add all
gst // vim shortform of git status

gcmsg "fixed bonehead mistake"
  // what does gcmsg do
  // guessing git commit msg

l // what does this do


//what to do
// ---- write a test for your access file system
// ---- test it
// ---- deploy it

// we have created everthing now its just a matter of
// pushing the repo

git push heroku master

// note heroku instead of origin

// this command will go and get all the node dependencies
// by itself

// it will create some environment variables that we
// can use.

if successful you should be able to go to the address

//troubleshoot this
// go to heroku
