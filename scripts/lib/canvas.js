define(function () {
  var _container;
  var _canvas;
  var _context;
  
  return {
    init: function(container) {
      _container = container;
      _container.style.position = 'relative';
      
      _canvas = document.createElement('CANVAS');
      
      _canvas.style.width = _container.style.width;
      _canvas.width = parseInt(_container.style.width);
      _canvas.style.height = _container.style.height;
      _canvas.height = parseInt(_container.style.height);
      
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
    
    line: function(xStart, yStart, xEnd, yEnd) {      
      _context.beginPath();
      _context.moveTo(xStart, yStart);
      _context.lineTo(xEnd, yEnd);
      _context.stroke();
    }
    
  }
});
