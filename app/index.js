import '../common/time-utils';
import './messaging';
import document from 'document';
import haptics from 'haptics';
import touch from './touch';
import ui from './ui';
import settingsStorage from './settings-storage';

import {
  getFirstDayOfWeek
} from './settings';

let currentWeek = new Date();
let weekDiff = 0;

let updateUi = function() {
  let firstDayOfWeek = getFirstDayOfWeek();

  ui.weekNumber = currentWeek.getWeek(firstDayOfWeek);
  ui.weekStart = currentWeek.getWeekStart(firstDayOfWeek);
  ui.weekEnd = currentWeek.getWeekEnd(firstDayOfWeek);  

  ui.weekDiff = weekDiff;
};

let flipWeek = function(diff) {
  haptics.vibration.start('bump');
  
  currentWeek.setDate(currentWeek.getDate() + 7*diff);
  weekDiff += diff;   
  
  setTimeout(updateUi, 0); 
};

let onUp = function() {  
  if (weekDiff < 52) {
    flipWeek(+1);
  }  
};

let onDown = function() {
  if (weekDiff > -52) {
    flipWeek(-1);
  }  
};

let onKeyPress = function(e) {
  if (e.key === 'down') {
    onDown();
  } else if (e.key === 'up') {
    onUp();
  }  
};

let onSettingsUpdated = function() {
  updateUi();
};

document.onkeypress = onKeyPress;
touch.onFlickUp = onUp;
touch.onFlickDown = onDown;
settingsStorage.onUpdated.add(onSettingsUpdated);

updateUi();
