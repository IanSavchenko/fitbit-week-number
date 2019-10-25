import ui from './ui';

const lastMouseDown = {
  x: undefined,
  y: undefined
};

ui.touch_handler.onmousedown = function(evt) {
  lastMouseDown.x = evt.screenX;
  lastMouseDown.y = evt.screenY;
};

ui.touch_handler.onmouseup = function(evt) {
  if (lastMouseDown.x - evt.screenX > 30) {
    eventHandlers.onFlickLeft();
    return;
  }
  
  if (lastMouseDown.x - evt.screenX < -30) {
    eventHandlers.onFlickRight();
    return;
  }
  
  lastMouseDown.x = undefined;
  lastMouseDown.y = undefined;
};

let eventHandlers = {
  onFlickLeft: function() {},
  onFlickRight: function() {}
};

export default eventHandlers;
