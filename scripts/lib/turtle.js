define(function () {
  var _turtle;
  var _canvas;

  var _width = 10;
  var _height = 10;

  var _xPosition = 0;
  var _yPosition = 0;
  var _angle = -90;

  var _penSize = 1;
  var _penDown = true;
  
  var _executionDelay = 0;
  var _executionTimeout;
  var _commands = [];
  
  return {
    init: function(canvas) {
      _canvas = canvas;
      _turtle = document.createElement('DIV');
      _turtle.id = 'turtle';
      _turtle.style.height = _height + 'px';
      _turtle.style.width = _width + 'px';
      _turtle.style.backgroundColor = 'blue';
      _turtle.style.position = 'absolute';
      _canvas.getContainer().appendChild(_turtle);            
      this.reset();      
    },
    
    start: function() {
      if (_executionTimeout ) {
        return;
      }
      this.run();
    },
    
    run: function () {
      if (!_commands.length) {
        return;
      }
      
      var command = _commands.shift();
      command();
      
      var _self = this;
      _executionTimeout = setTimeout(function() { _self.run(); }, _executionDelay);        
    },
    
    reset: function() {
      this.clear();
      this.setPen(false);
      var dimensions = _canvas.getDimensions();      
      this.moveTo(dimensions.width / 2, dimensions.height / 2);
      this.setPen(true);
      _angle = -90;
    },
    
    setSpeed: function(speed) {
      switch(speed) {
        case 'slow':
          _executionDelay = 1000;
          break;
        case 'fast':
          _executionDelay = 10;
          break;
        default:
          _executionDelay = 100;
      }
    },
    
    addCommand: function(command) {
      _commands.push(command);
      this.start();
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
    
    changeAngle: function (angleDiff) {
      var _self = this;
      var command = function() { 
        _self.setAngle(_angle + angleDiff);       
      };
      this.addCommand(command)      
    },
    
    setAngle: function(angle) {
      _angle = angle;
    },
    
    angleInRadians: function() {
      return _angle * (Math.PI / 180);
    },
    
    move: function (length) {
      var _self = this;
      var command = function() {
        _self.moveTo(
          _xPosition + (length * Math.cos(_self.angleInRadians())), 
          _yPosition + (length * (Math.sin(_self.angleInRadians())))
        );                
      }
      this.addCommand(command);
    },
    
    forward: function (length) {
      this.move(length);
    },
    
    backward: function (length) {
      this.move(length * -1);
    },
    
    right: function (angleDiff) {
      this.changeAngle(angleDiff);
    },

    left: function (angleDiff) {
      this.changeAngle(angleDiff * -1);
    },
    
    clear: function () {
      _canvas.clear();
    }
  }
});
