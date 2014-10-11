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

      this.initRunButtons(editorId);
      return 
    },
    
    initRunButtons: function(editorId) {
      var runButton = this.createRunButton(_containers[editorId], 'Run');
      runButton.style.left = '60px';    
      var _self = this;
      runButton.onclick = function() {
        _self.execute(_self.getCode(editorId))
      };      

      var runSlowButton = this.createRunButton(_containers[editorId], 'Run Slow');
      runSlowButton.style.left = '112px';    
      var _self = this;
      runSlowButton.onclick = function() {
        _self.execute(_self.getCode(editorId), 'slow')
      };      

      var runFastButton = this.createRunButton(_containers[editorId], 'Run Fast');
      runFastButton.style.left = '189px';    
      var _self = this;
      runFastButton.onclick = function() {
        _self.execute(_self.getCode(editorId), 'fast')
      };      
    },
    
    createRunButton: function (container, html) {
      var runButton = document.createElement('BUTTON');
      runButton.innerHTML = html;
      runButton.className = 'run-button';
      runButton.style.top = (parseInt(container.offsetHeight) - parseInt(runButton.offsetHeight) - 36) + 'px';
      container.appendChild(runButton);
      return runButton;
    },
    
    getCode: function(editorId) {
      return _editors[editorId].getValue();
    },
    
    getEditor: function(editorId) {
      return _editors[editorId];
    },
    
    execute: function (javascript, speed) {
      this.turtle.reset()
      this.turtle.setSpeed(speed);
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