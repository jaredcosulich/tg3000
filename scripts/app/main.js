define(function (require) {
  var chapterContainer = document.getElementById('chapter-container');
  var chapter = require('chapter');
  chapter.init(chapterContainer, 'text/');
  chapter.load(1);
  
  var canvasContainer = document.getElementById('canvas-container');
  var canvas = require('canvas');
  canvas.init(canvasContainer);  
  
  var turtle = require('turtle');
  turtle.init(canvas);
  
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(30);
  turtle.right(15);
  turtle.backward(100);
});