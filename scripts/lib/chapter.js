define(function (require) {
  var _textPath;
  var _container;
  var _turtle;
  var _editorFactory;
  
  return {
    init: function(container, textPath, turtle) {
      _container = container;
      _textPath = textPath;
      _turtle = turtle;

      require(['editor_factory'], function(editorFactory) {
        _editorFactory = editorFactory;
        _editorFactory.init(turtle);
      });
    },
    
    clean: function (stringFunction) {
      return stringFunction.toString().
            replace(/^[^\/]+\/\*!?/, '').
            replace(/\*\/[^\/]+$/, '');
    },
    
    initCodeBlocks: function() {
      var chapterDivs = _container.getElementsByTagName('DIV');
      var chapterDivCount = chapterDivs.length;
      var codeBlocks = [];
      for (var i=0; i<chapterDivCount; ++i) {
        var chapterDiv = chapterDivs[i];
        var codeNames = ['turtle', 'javascript'];
        for (j in codeNames) {
          if((' ' + chapterDiv.className + ' ').indexOf(' ' + codeNames[j] + '-code' + ' ') > -1) {
            if (codeNames[j] == 'turtle') {
              chapterDiv.style.display = 'none';              
            } else {
              codeBlocks.push(chapterDiv);
            }        
          }          
        }
      }
      
      for (var i=0; i<codeBlocks.length; ++i) {
        this.initCodeBlock(codeBlocks[i]);
      }
    },
    
    initCodeBlock: function(codeBlock) {
      if (_editorFactory == undefined) {
        var _self = this;
        setTimeout(function() {
          _self.initCodeBlock(codeBlock);
        }, 100);  
        return;
      }
      
      var code = codeBlock.innerHTML;
      
      codeBlock.innerHTML = code.replace(/\s+/, '');
      var lineCount = codeBlock.innerHTML.match(/\n/g).length;
      codeBlock.style.height = (lineCount * 21) + 'px';
      
      _editorFactory.createEditor(codeBlock, codeBlock.id);
      
      
      //   
      // var runButton = document.createElement('BUTTON');
      // runButton.innerHTML = 'Run This Code';
      // runButton.onclick = function() {
      //   _editor.execute(code)
      // };
      // codeBlock.appendChild(runButton);      
    },
    
    sizeImages: function() {
      var images = _container.getElementsByTagName('IMG');
      for (var i=0; i<images.length; ++i) {
        var image = images[i];
        this.sizeImage(image);
        var _self = this;
        image.onload = function() {
          _self.sizeImage(image);
        }
      }
    },
    
    sizeImage: function(image) {
      var width = image.width;
      var height = image.height;
      if (!width || !height) {
        width = image.offsetWidth;
        height = image.offsetHeight;
      }
      if (!width || !height) return;
      var maxWidth = _container.offsetWidth * 2 / 3
      var ratio = maxWidth / width;
      image.width = maxWidth;
      image.height = height * ratio;
    },
    
    load: function(index) {
      // console.log(require('text/chap1.html.js').toString())
      _self = this;
      var chapterPath = _textPath + 'chap' + index + '.html.js';
      require([chapterPath], function(chapterFunction) {
        var cleanHtml = _self.clean(chapterFunction);
        _container.innerHTML = cleanHtml;   
        _self.sizeImages();
        _self.initCodeBlocks();
      });
    }
  }

});