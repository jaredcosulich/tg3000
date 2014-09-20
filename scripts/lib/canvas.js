define(function () {
  var canvasContainer;
  var canvas;
  
  return {
    build: function(container) {
      canvasContainer = container;
      canvas = document.createElement('CANVAS');
      
      canvas.style.width = canvasContainer.style.width;
      canvas.width = canvasContainer.style.width;
      canvas.style.height = canvasContainer.style.height;
      canvas.height = canvasContainer.style.height;
      
      canvasContainer.appendChild(canvas);
    }
  }
});
