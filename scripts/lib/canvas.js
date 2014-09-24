define(function () {
  var _container;
  var _canvas;
  var _context;
  var _dimensions;
  
  return {
    init: function(container) {
      _container = container;
      
      _canvas = document.createElement('CANVAS');
      
      _dimensions = {
        width: parseInt(_container.offsetWidth),
        height: parseInt(_container.offsetHeight)
      }
      _canvas.style.width = _dimensions.width + 'px';
      _canvas.width = _dimensions.width;
      _canvas.style.height = _dimensions.height + 'px';
      _canvas.height = _dimensions.height;
      
      this.initContext();
      
      _container.appendChild(_canvas);
    },
    
    initContext: function(color) {       
      _context = _canvas.getContext("2d");       
      _context.fillStyle = "#000000";      
    },
    
    getContainer: function () {
      return _container;
    },
    
    getDimensions: function() {
      return _dimensions;
    },
    
    line: function(xStart, yStart, xEnd, yEnd) {      
      _context.beginPath();
      _context.moveTo(xStart, yStart);
      _context.lineTo(xEnd, yEnd);
      _context.stroke();
    },
    
    clear: function() {
      _context.clearRect (0, 0, _dimensions.width, _dimensions.height);
    }
    
  }
});
