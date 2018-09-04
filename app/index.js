import "../common/index.js";
import './messaging';
import document from "document";
import haptics from "haptics";
import touch from './touch';
import ui from './ui';

let currentWeek = new Date();
let weekDiff = 0;

let updateUi = function() {
  ui.weekNumber = currentWeek.getWeek();
  ui.weekStart = currentWeek.getWeekStart();
  ui.weekEnd = currentWeek.getWeekEnd();  
  ui.weekDiff = weekDiff;
}

let flipWeek = function(diff) {
  haptics.vibration.start("bump");
  
  currentWeek.setDate(currentWeek.getDate() + 7*diff);
  weekDiff += diff;   
  
  setTimeout(updateUi, 0); 
}

let onUp = function() {  
  if (weekDiff < 52) {
    flipWeek(+1);
  }  
}

let onDown = function() {
  if (weekDiff > -52) {
    flipWeek(-1);
  }  
}

let onKeyPress= function(e) {
  if (e.key === 'down') {
    onDown();
  } else if (e.key === 'up') {
    onUp();
  }  
}

document.onkeypress = onKeyPress;
touch.onFlickUp = onUp;
touch.onFlickDown = onDown;

updateUi();
