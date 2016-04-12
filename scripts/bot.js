"use strict"
var sandbox = require('sandbox');

module.exports = function(robot){

  /* JS interpreter in slack */
  // example: call var a = 1; a + 2;
  // (will print "3" to slack)  
  // this line says that bot will respond to anyone that writes 'call ___'
  robot.respond(/call (.+)/i, function(msg) {
    // grab the second part of the message; e.g, the user's code
    var code = msg.match[1];

    // create a new JS sandbox (this is a node module)
    var s = new sandbox();

    // run the code
    s.run(code, function(out) {
      // send the output to slack
      msg.send(out.result);
    })
  });


  // build off of this template
  robot.respond(/YOUR_COMMAND (.+)/i, function(msg) {
    // to send messages to slack: msg.send('lolsup')
    // to retrieve user input: var in = msg.match[1]
  })
}
