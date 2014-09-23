define(['ace'], function (require) {
  var _editor;
  
  return {
    init: function(editorId) {
      _editor = ace.edit(editorId);
      _editor.setTheme("ace/theme/chrome");
      _editor.getSession().setMode("ace/mode/javascript");
    },
    
    executeTurtle: function(turtleCode) {
      _editor.setValue(this.translateTurtleToJavascript(turtleCode));
    },
    
    translateTurtleToJavascript: function (turtleCode) {
      return turtleCode;
    }  
  }

});