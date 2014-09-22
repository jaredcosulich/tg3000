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
  var _angle = -90;
  var _penDown = true;
  
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
      this.setPen(false);
      this.moveTo(landscape.width / 2, landscape.height / 2);
      this.setPen(true);
      canvasContainer.appendChild(_turtle);      
    },
    
    setPen: function(down) {
      _penDown = down
    },
    
    moveTo: function (x, y) {
      _turtle.style.left = x - (_width / 2) + 'px';
      _turtle.style.top = y - (_height / 2) + 'px';

      if (_penDown) {
        _canvas.line(_xPosition, _yPosition, x, y);        
      }

      _xPosition = x;
      _yPosition = y;
    },
    
    setAngle: function(angle) {
      _angle = angle;
    },
    
    angleInRadians: function() {
      return _angle * (Math.PI / 180);
    },
    
    move: function (length) {
      this.moveTo(
        _xPosition + (length * Math.cos(this.angleInRadians())), 
        _yPosition + (length * (Math.sin(this.angleInRadians())))
      );
    },
    
    forward: function (length) {
      this.move(length);
    },
    
    backward: function (length) {
      this.move(length * -1);
    },
    
    right: function (angleDiff) {
      this.setAngle(_angle + angleDiff);
    },

    left: function (angleDiff) {
      this.setAngle(_angle - angleDiff);
    }
  }
});
