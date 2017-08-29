var restify = require('restify');
var builder = require('botbuilder');
var fs = require('fs');

var https_options = {
  key: fs.readFileSync('/etc/letsencrypt/live/ahealthysliceofhappiness.com/privkey.pem'),
  certificate: fs.readFileSync('/etc/letsencrypt/live/ahealthysliceofhappiness.com/fullchain.pem')
};

var appInfo = JSON.parse(fs.readFileSync("./config/appInfo.json"));

console.log('App info: %s', appInfo);

// Setup Restify Server
var server = restify.createServer(https_options);
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector(appInfo);

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    console.log("request received");
    session.send("Brenton said: %s", session.message.text);
});
