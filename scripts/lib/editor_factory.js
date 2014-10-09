define(['ace'], function (require) {
  var _editors = {};
  var _containers = {};
  var _turtle;
  
  return {
    init: function(turtle) {
      this.turtle = turtle;            
    },
    
    createEditor: function(container, editorId) {
      var editor = ace.edit(editorId);
      editor.setTheme("ace/theme/chrome");
      editor.getSession().setMode("ace/mode/javascript");
      _editors[editorId] = editor;
      _containers[editorId] = container;

      this.initRunButton(editorId);
      return 
    },
    
    initRunButton: function(editorId) {
      var runButton = document.createElement('BUTTON');
      var container = _containers[editorId];
      container.appendChild(runButton);            
      runButton.innerHTML = 'Run';
      runButton.style.position = 'absolute';
      runButton.style.top = (parseInt(container.offsetHeight) - parseInt(runButton.offsetHeight) - 12) + 'px';
      runButton.style.left = ((parseInt(container.offsetWidth) - parseInt(runButton.offsetWidth)) / 2) + 'px';      
      var _self = this;
      runButton.onclick = function() {
        _self.execute(_self.getCode(editorId))
      };      
    },
    
    getCode: function(editorId) {
      return _editors[editorId].getValue();
    },
    
    getEditor: function(editorId) {
      return _editors[editorId];
    },
    
    execute: function (javascript) {
      this.turtle.reset()
      var code = this.process(javascript);
      // this.setCode(code);
      eval('var turtle = this.turtle;' + code);
    },
    
    process: function(code) {
      return code.
        replace(/^\s*/ig, '').
        replace(/&lt;/ig, '<');
    }
    
  }
});