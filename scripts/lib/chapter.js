define(function (require) {
  var _path;
  var _container;
  var _editor;
  
  return {
    init: function(container, path, editor) {
      _container = container;
      _path = path;
      _editor = editor;
    },
    
    clean: function (stringFunction) {
      return stringFunction.toString().
            replace(/^[^\/]+\/\*!?/, '').
            replace(/\*\/[^\/]+$/, '');
    },
    
    initCodeBlocks: function() {
      var chapterDivs = document.getElementsByTagName('DIV');
      for (i in chapterDivs) {
        var chapterDiv = chapterDivs[i];
        var codeNames = ['turtle', 'javascript'];
        for (j in codeNames) {
          if((' ' + chapterDiv.className + ' ').indexOf(' ' + codeNames[j] + '-code' + ' ') > -1) {
            this.initCodeBlock(chapterDiv);
            if (codeNames[j] == 'turtle') {
              chapterDiv.style.display = 'none';              
            }
          }          
        }
      }
    },
    
    initCodeBlock: function(codeBlock) {
      var code = codeBlock.innerHTML;
      codeBlock.innerHTML = code.
        replace(/\n\s\s/ig, '<br/>&nbsp;&nbsp;&nbsp;&nbsp;').
        replace(/\n/ig, '<br/>');
        
      var runButton = document.createElement('BUTTON');
      runButton.innerHTML = 'Run This Code';
      runButton.onclick = function() {
        _editor.execute(code)
      };
      codeBlock.appendChild(runButton);      
    },
    
    load: function(index) {
      // console.log(require('text/chap1.html.js').toString())
      _self = this;
      var chapterPath = _path + 'chap' + index + '.html.js';
      require([chapterPath], function(chapterFunction) {
        var cleanHtml = _self.clean(chapterFunction);
        _container.innerHTML = cleanHtml;   
        _self.initCodeBlocks();
      });
    }
  }

});