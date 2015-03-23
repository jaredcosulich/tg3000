define(function () {
  var _turtle;
  var _canvas;

  var _width = 16;
  var _height = 18;

  var _xPosition;
  var _yPosition;
  var _angle = -90;

  var _penSize = 1;
  var _penDown = true;
  
  var _executionDelay = 0;
  var _executionTimeout;
  var _commands = [];
  var _running = false;
  
  var _dimensions;
  var _scale = 0.75;
  
  return {
    init: function(canvas) {
      _canvas = canvas;
      _dimensions = _canvas.getDimensions();
      _xPosition = _dimensions.width / 2;
      _yPosition = _dimensions.height / 2;
      
      _turtle = document.createElement('DIV');
      _turtle.id = 'turtle';
      _turtle.innerHTML = '<img src=\'images/mouse.png\'/>';
      _turtle.style.height = _height + 'px';
      _turtle.style.width = _width + 'px'; 
      _turtle.style.position = 'absolute';
      _canvas.getContainer().appendChild(_turtle);            
      this.reset();      
    },
    
    start: function() {
      if (this._running) {
        return;
      }
      this._running = true;
      this.run();
    },
    
    run: function () {
      if (!_commands.length) {
        this._running = false;
        return;
      }
      
      var command = _commands.shift();
      if (command.now) {
        command.action();
        this.run();         
      } else {
        var _self = this;
        _executionTimeout = setTimeout(
          function() {
            command.action();
            _self.run();
          }, _executionDelay
        );        
      }
    },
    
    reset: function() {
      this.clearCanvas();
      this.setPen(false);
      this.setXY(0, 0);
      this.setPen(true);
      this.setAngle(-90);
      this.stop();
    },
    
    stop: function() {
      _commands = [];
      clearTimeout(_executionTimeout);
      _executionTimeout = undefined;  
      this._running = false;    
    },
    
    setSpeed: function(speed) {
      switch(speed) {
        case 'slow':
          _executionDelay = 500;
          break;
        case 'fast':
          _executionDelay = 1;
          break;
        default:
          _executionDelay = 100;
      }
    },
    
    setScale: function(scale) {
      _scale = scale;
    },
    
    addCommand: function(action, now) {
      _commands.push({action: action, now: now});
      this.start();
    },
    
    setPen: function(down) {
      this._penDown = down
    },
    
    penDown: function() {
      var _self = this;
      var action = function() { 
        _self.setPen(true);     
      };
      this.addCommand(action)
    },
    
    penUp: function() {
      var _self = this;
      var action = function() { 
        _self.setPen(false);     
      };
      this.addCommand(action)
    },
    
    setXY: function (x, y) {
      var widthAdjustment = _dimensions.width / 2;
      var heightAdjustment = _dimensions.height / 2;
      var xAdjusted = x + widthAdjustment;
      var yAdjusted = y + heightAdjustment;
      
      _turtle.style.left = xAdjusted - (_width / 2) + 'px';
      _turtle.style.top = yAdjusted - (_height / 2) + 'px';

      if (this._penDown) {
        _canvas.line(_xPosition + widthAdjustment, _yPosition + heightAdjustment, xAdjusted, yAdjusted);        
      }

      _xPosition = xAdjusted - widthAdjustment;
      _yPosition = yAdjusted - heightAdjustment;
    },
    
    changeAngle: function (angleDiff) {
      var _self = this;
      var action = function() { 
        _self.setAngle(_angle + angleDiff);       
      };
      this.addCommand(action)      
    },
    
    setAngle: function(angle) {
      _angle = angle;
      
      var rotate = 'rotate(' + (angle + 90) + 'deg)';
      _turtle.style.WebkitTransform = rotate; 
      _turtle.style.msTransform = rotate; 
      _turtle.style.transform = rotate; 
    },
    
    angleInRadians: function() {
      return _angle * (Math.PI / 180);
    },
    
    move: function (length) {
      var scaledLength = length * _scale;
      var _self = this;
      var action = function() {
        _self.setXY(
          _xPosition + (scaledLength * Math.cos(_self.angleInRadians())), 
          _yPosition + (scaledLength * (Math.sin(_self.angleInRadians())))
        );                
      }
      this.addCommand(action);
    },
    
    forward: function (length) {
      this.move(length);
    },
    
    back: function (length) {
      this.move(length * -1);
    },
    
    right: function (angleDiff) {
      this.changeAngle(angleDiff);
    },

    left: function (angleDiff) {
      this.changeAngle(angleDiff * -1);
    },
    
    clearCanvas: function () {
      _canvas.clear();
    }
  }
});
