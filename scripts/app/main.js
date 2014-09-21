define(function (require) {
  var canvas = require('canvas');
  var canvasContainer = document.getElementById('canvas-container');
  canvas.init(canvasContainer);  
  
  var turtle = require('turtle');
  turtle.init(canvas);
  
  turtle.moveUp(100);
  turtle.moveLeft(20);
  turtle.moveDown(10);
  turtle.moveRight(40);
  turtle.moveDown(40);
  
});