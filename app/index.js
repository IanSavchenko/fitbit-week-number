import '../common';
import './messaging';
import document from 'document';
import touch from './touch';
import ui from './ui';
import settingsStorage from './settings-storage';

import {runDemo} from './demo';

import {
  getFirstDayOfWeek,
  MAX_WEEK_DIFF
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
  currentWeek.setDate(currentWeek.getDate() + 7*diff);
  weekDiff += diff;   
  
  setTimeout(updateUi, 0);
};

let onUp = function() {  
  if (weekDiff < MAX_WEEK_DIFF) {
    flipWeek(+1);
    ui.animateUp();
  }  
};

let onDown = function() {
  if (weekDiff > -MAX_WEEK_DIFF) {
    flipWeek(-1);
    ui.animateDown();
  }  
};

let onKeyPress = function(e) {
  if (e.key === 'down') {
    onDown();
  } else if (e.key === 'up') {
    onUp();
  } else if (e.key === 'back') {
    if (weekDiff !== 0) {
      flipWeek(-weekDiff);
      e.preventDefault();
    } 
  }
};

let onSettingsUpdated = function() {
  updateUi();
};

document.onkeypress = onKeyPress;
touch.onFlickLeft = onUp;
touch.onFlickRight = onDown;
settingsStorage.onUpdated.add(onSettingsUpdated);

// currentWeek = runDemo(); // comment me

updateUi();
