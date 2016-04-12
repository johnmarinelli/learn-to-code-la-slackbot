"use strict"
var sandbox = require('sandbox');

module.exports = function(robot){
  // objective: an in-slack javascript interpreter
  
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
    });
  });
}
