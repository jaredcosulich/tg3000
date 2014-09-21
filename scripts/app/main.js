define(function (require) {
  var canvas = require('canvas');
  var canvasContainer = document.getElementById('canvas-container');
  canvas.init(canvasContainer);  
  
  var turtle = require('turtle');
  turtle.init(canvas);
});