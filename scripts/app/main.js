define(function (require) {
  var canvasContainer = document.getElementById('canvas-container');
  var canvas = require('canvas');
  canvas.init(canvasContainer);  

  var turtle = require('turtle');
  turtle.init(canvas);
  
  // var editor = require('editor')
  // editor.init(document.getElementById('code-container'), 'editor', turtle);
  
  var chapterContainer = document.getElementById('chapter-container');
  var codeExamplesList = document.getElementById('code-examples-list')
  var chapter = require('chapter');
  chapter.init(chapterContainer, codeExamplesList, 'text/', turtle);
  chapter.load('1');
  
  require(['editor_factory'], function(editorFactory) {
    var editorFactory = editorFactory;
    editorFactory.init(turtle);
    var codeBlock = document.getElementById('default-editor');
    editorFactory.createEditor(codeBlock, codeBlock.id)
  });
  
  
});