define(function (require) {
  var canvasContainer = document.getElementById('canvas-container');
  var canvas = require('canvas');
  canvas.init(canvasContainer);  

  var turtle = require('turtle');
  turtle.init(canvas);
  
  var editor = require('editor')
  editor.init('editor', turtle)
  
  var chapterContainer = document.getElementById('chapter-container');
  var chapter = require('chapter');
  chapter.init(chapterContainer, 'text/', editor);
  chapter.load(1);
});