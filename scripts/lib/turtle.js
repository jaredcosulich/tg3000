define(function () {
  var _turtle;
  var _canvas;
  var landscape = {
    width: 0,
    height: 0
  }
  var _xPosition = 0;
  var _yPosition = 0;
  var _penSize = 1;
  var _width = 10;
  var _height = 10;
  
  return {
    init: function(canvas) {
      _canvas = canvas;
      _turtle = document.createElement('DIV');
      _turtle.id = 'turtle';
      _turtle.style.height = _height + 'px';
      _turtle.style.width = _width + 'px';
      _turtle.style.backgroundColor = 'blue';
      _turtle.style.position = 'absolute';
      
      var canvasContainer = _canvas.getContainer();
      landscape = {width: parseInt(canvasContainer.style.width), height: parseInt(canvasContainer.style.height)};
      this.position(landscape.width / 2, landscape.height / 2);
      canvasContainer.appendChild(_turtle);
      
      this.moveUp(100);
      this.moveLeft(20);
      this.moveDown(10);
      this.moveRight(40);
    },
    
    position: function (x, y) {
      _turtle.style.left = x - (_width / 2) + 'px';
      _turtle.style.top = y - (_height / 2) + 'px';
      _xPosition = x;
      _yPosition = y;
    },
    
    moveUp: function (length) {
      _canvas.draw(_xPosition, _yPosition - length, _penSize, length);
      this.position(_xPosition, _yPosition - length);
    },
    
    moveDown: function (length) {
      _canvas.draw(_xPosition, _yPosition, _penSize, length);
      this.position(_xPosition, _yPosition + length);
    },
    
    moveRight:function (length) {
      _canvas.draw(_xPosition, _yPosition, length, _penSize);
      this.position(_xPosition + length, _yPosition);
    },
    
    moveLeft: function (length) {
      _canvas.draw(_xPosition - length, _yPosition, length, _penSize);
      this.position(_xPosition - length, _yPosition);
    }
    
  }
});
