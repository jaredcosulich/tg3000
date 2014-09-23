define(function (require) {
  var _path;
  var _container;
  
  return {
    init: function(container, path) {
      _container = container;
      _path = path;
    },
    
    process: function (stringFunction) {
      return stringFunction.toString().
            replace(/^[^\/]+\/\*!?/, '').
            replace(/\*\/[^\/]+$/, '');
    },
    
    load: function(index) {
      // console.log(require('text/chap1.html.js').toString())
      _self = this;
      var chapterPath = _path + 'chap' + index + '.html.js';
      require([chapterPath], function(chapterFunction) {
        html = _self.process(chapterFunction)
        _container.innerHTML = html;        
      });
    }
  }

});