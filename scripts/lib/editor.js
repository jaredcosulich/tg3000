define(['ace'], function (require) {
  var _editor;
  
  return {
    init: function(editorId, turtle) {
      _editor = ace.edit(editorId);
      _editor.setTheme("ace/theme/chrome");
      _editor.getSession().setMode("ace/mode/javascript");
      this.turtle = turtle;
    },
    
    execute: function (javascript) {
      var code = this.process(javascript);
      _editor.setValue(code);
      this.turtle.reset()
      eval('var turtle = this.turtle;' + code);
    },
    
    process: function(code) {
      return code.replace(/&lt;/ig, '<');
    }
  }

});