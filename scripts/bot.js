"use strict"
var sandbox = require('sandbox');

module.exports = function(robot){
  robot.respond(/call (.+)/i, function(msg) {
    var code = msg.match[1];
    var s = new sandbox();
    s.run(code, function(out) {
      msg.send(out.result);
    });
  });
}
