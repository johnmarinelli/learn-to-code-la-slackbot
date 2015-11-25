"use strict"

module.exports = function(robot){
  robot.respond(/animate me (.+)/i, function(msg){
    msg.send("No.");
  });
}
