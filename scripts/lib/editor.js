define(['ace'], function (require) {
  var _editor;
  var _turtle;
  
  return {
    init: function(editorId, turtle) {
      _editor = ace.edit(editorId);
      _editor.setTheme("ace/theme/chrome");
      _editor.getSession().setMode("ace/mode/javascript");
    },
    
    executeTurtle: function(turtleCode) {
      _editor.setValue(this.translateTurtleToJavascript(turtleCode));
    },
    
    translateTurtleToJavascript: function (turtleCode) {
      return turtleCode;
    }, 
    
    executeJavascript: function (javascript) {
      _editor.setValue(javascript);
    }
  }

});