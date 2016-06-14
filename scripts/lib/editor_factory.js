define(['ace'], function (require) {
  var _editors = {};
  var _containers = {};
  var turtle;
  
  return {
    init: function(turtle) {
      this.turtle = turtle;            
    },
    
    createEditor: function(container, editorId, autoClear) {
      var editor = ace.edit(editorId);
      editor.setTheme("ace/theme/chrome");
      editor.getSession().setMode("ace/mode/javascript");
      editor.getSession().setTabSize(2);
      editor.setOptions({
          maxLines: Infinity
      });
      _editors[editorId] = editor;
      _containers[editorId] = container;

      this.initRunButtons(editorId, autoClear);
      return 
    },
    
    initRunButtons: function(editorId, autoClear) {
      var table = document.createElement('TABLE');
      table.className = 'run-buttons';
      var tbody = document.createElement('TBODY');
      var row = document.createElement('TR');
      table.appendChild(tbody);
      tbody.appendChild(row);
      _containers[editorId].appendChild(table);
      
      var _self = this;

      this.createRunButton(row, 'Run', function() { 
        _self.execute(_self.getCode(editorId), 'normal', autoClear); 
      });

      this.createRunButton(row, 'Run Slow', function() { 
        _self.execute(_self.getCode(editorId), 'slow', autoClear); 
      });
      
      this.createRunButton(row, 'Run Fast', function() { 
        _self.execute(_self.getCode(editorId), 'fast', autoClear); 
      });
      
      this.createRunButton(row, 'Stop', function() { 
        _self.stopExecution(); 
      });
      
      if (!autoClear) {
        this.createRunButton(row, 'Clear', function() { 
          _self.turtle.reset(); 
        });        
      }
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
    
    execute: function (javascript, speed, clear) {
      if (clear) this.turtle.reset()
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
        replace(/&lt;/ig, '<');//.
        //replace(/^\s*([^\n]+;)\s*$/igm, 'turtle.addCommand(function() { $1 }, true);');
      //console.log(x);
      //return x;  
    }
    
  }
});