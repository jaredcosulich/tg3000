define(function (require) {
  var canvas = require('canvas');
  var canvasContainer = document.getElementById('canvas-container');
  canvas.init(canvasContainer);  
  
  var turtle = require('turtle');
  turtle.init(canvas);
  
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(30);
  turtle.right(15);
  turtle.backward(100);
});