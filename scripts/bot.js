"use strict"

module.exports = function(robot){
  robot.respond(/ship it (.+)/i, function(msg){
    msg.send("ship it");
  });




}
