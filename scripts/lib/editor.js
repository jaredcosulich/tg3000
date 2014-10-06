define(['ace'], function () {
  var _container;
  var _editor;
  
  return {
    init: function(container, editorId, turtle) {
      _editor = ace.edit(editorId);
      _editor.setTheme("ace/theme/chrome");
      _editor.getSession().setMode("ace/mode/javascript");
      this.turtle = turtle;
      
      _container = container;
      this.initRunButton();
    },
    
    initRunButton: function() {
      var runButton = document.createElement('BUTTON');
      _container.appendChild(runButton);            
      runButton.innerHTML = 'Run';
      runButton.style.position = 'absolute';
      runButton.style.top = (parseInt(_container.offsetHeight) - parseInt(runButton.offsetHeight) - 12) + 'px';
      runButton.style.left = ((parseInt(_container.offsetWidth) - parseInt(runButton.offsetWidth)) / 2) + 'px';      
      var _self = this;
      runButton.onclick = function() {
        _self.execute(_self.getCode())
      };
    },
    
    getCode: function() {
      return _editor.getValue();
    },
    
    setCode: function(code) {
      _editor.setValue(code);
      _editor.gotoLine(0);      
      this.turtle.reset()
    },
    
    execute: function (javascript) {
      var code = this.process(javascript);
      this.setCode(code);
      eval('var turtle = this.turtle;' + code);
    },
    
    process: function(code) {
      return code.
        replace(/^\s*/ig, '').
        replace(/&lt;/ig, '<');
    }
  }

});