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
  if (lastMouseDown.y - evt.screenY > 30) {
    eventHandlers.onFlickDown();
    return;
  }
  
  if (lastMouseDown.y - evt.screenY < -30) {
    eventHandlers.onFlickUp();
    return;
  }
  
  lastMouseDown.x = undefined;
  lastMouseDown.y = undefined;
};

let eventHandlers = {
  onFlickUp: function() {},
  onFlickDown: function() {}
};

export default eventHandlers;
