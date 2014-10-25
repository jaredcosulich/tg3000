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
      editor.getSession().setTabSize(2);
      editor.setOptions({
          maxLines: Infinity
      });
      _editors[editorId] = editor;
      _containers[editorId] = container;

      this.initRunButtons(editorId);
      return 
    },
    
    initRunButtons: function(editorId) {
      var table = document.createElement('TABLE');
      table.className = 'run-buttons';
      var tbody = document.createElement('TBODY');
      var row = document.createElement('TR');
      table.appendChild(tbody);
      tbody.appendChild(row);
      _containers[editorId].appendChild(table);
      
      var _self = this;

      this.createRunButton(row, 'Run', function() { 
        _self.execute(_self.getCode(editorId)); 
      });

      this.createRunButton(row, 'Run Slow', function() { 
        _self.execute(_self.getCode(editorId), 'slow'); 
      });
      
      this.createRunButton(row, 'Run Fast', function() { 
        _self.execute(_self.getCode(editorId), 'fast'); 
      });
      
      this.createRunButton(row, 'Stop', function() { 
        _self.stopExecution(); 
      });
    },
    
    createRunButton: function (container, html, clickFunction) {
      var runButton = document.createElement('BUTTON');
      runButton.innerHTML = html;
      runButton.className = 'run-button';
      runButton.onclick = clickFunction;

      var cell = document.createElement('TD');
      cell.appendChild(runButton);
      container.appendChild(cell);
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
    
    stopExecution: function() {
      this.turtle.stop();
    },
    
    process: function(code) {
      return code.
        replace(/^\s*/ig, '').
        replace(/&lt;/ig, '<');
    }
    
  }
});