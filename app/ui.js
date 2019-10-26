import document from 'document';
import {MAX_WEEK_DIFF} from './settings';

const week_number_first = document.getElementById('week_number_first');
const week_number_second = document.getElementById('week_number_second');
      
const week_diff = document.getElementById('week_diff');
const week_diff_value = week_diff.getElementById('week_diff_value');

const week_start_day_name = document.getElementById('week_start_day_name');
const week_end_day_name = document.getElementById('week_end_day_name');

const week_start_day = document.getElementById('week_start_day');
const week_end_day = document.getElementById('week_end_day');

const touch_handler = document.getElementById('touch_handler');

const scroll_indicator = document.getElementById('scroll_indicator');
const scroll_indicator_up_group = scroll_indicator.getElementById('up_group');
const scroll_indicator_down_group = scroll_indicator.getElementById('down_group');

const background = document.getElementById('background');

const accentFillElements = document.getElementsByClassName('fill-accent');

// variables to hold state of UI and do fewer UI calls
// improves visual performance of the app
// especially, when animation is involved
let weekDiffVisible = false;
let _weekStartDayName;
let _weekEndDayName;
let canGoUp = true;
let canGoDown = true;
let _accentColor = '';

const SCROLL_INDICATOR_ANIMATION_DURATION_1 = 500;
const SCROLL_INDICATOR_ANIMATION_DURATION_2 = 700;

const _monthColors = [
  'dodgerblue', // jan
  'lightskyblue', // feb
  'fb-aqua', // mar
  'fb-mint', // apr
  'fb-lime', // may
  'salmon', // jun
  'tomato', // jul
  'fb-red', // aug
  'fb-peach', // sep
  'fb-orange', // oct
  'orangered', // nov
  'deepskyblue', // dec
];

const _updateAccentColor = function(time) {
  let accentColor = _monthColors[time.getMonth()];
  if (_accentColor === accentColor) {
    return;
  }

  _accentColor = accentColor;

  for (let el of accentFillElements) {
    el.style.fill = _accentColor;
  }

  background.gradient.colors.c1 = _accentColor;
};

export default {
  touch_handler,
  
  set weekNumber(value) {
    week_number_first.text = parseInt(value / 10, 10);
    week_number_second.text = value % 10;
  },
    
  set weekDiff(value) {
    if (value > 0) {
      week_diff_value.text = `+${value}`;
    } else if (value < 0) {
      week_diff_value.text = value;
    }
    
    if (value === 0 && weekDiffVisible) {
      week_diff.animate('disable');
      weekDiffVisible = false;
    } else if (value != 0 && !weekDiffVisible) {
      week_diff.animate('enable');
      weekDiffVisible = true;
    }
    
    if (value >= MAX_WEEK_DIFF && canGoUp) {
      setTimeout(function() {
        scroll_indicator_up_group.style.display = 'none';
      }, SCROLL_INDICATOR_ANIMATION_DURATION_1);

      canGoUp = false;
    } else if (value < MAX_WEEK_DIFF && !canGoUp) {
      setTimeout(function() {
        scroll_indicator_up_group.style.display = 'inline';
      }, SCROLL_INDICATOR_ANIMATION_DURATION_2);

      canGoUp = true;
    }
    
    if (value <= -MAX_WEEK_DIFF && canGoDown) {
      setTimeout(function() {
        scroll_indicator_down_group.style.display = 'none';
      }, SCROLL_INDICATOR_ANIMATION_DURATION_1);

      canGoDown = false;
    } else if (value > -MAX_WEEK_DIFF && !canGoDown) {
      setTimeout(function() {
        scroll_indicator_down_group.style.display = 'inline';
      }, SCROLL_INDICATOR_ANIMATION_DURATION_2);
      
      canGoDown = true;
    }

    if (value > 9 || value < -9) {
      week_diff_value.style.fontSize = 25;
      week_diff_value.x = 0;
    } else {
      week_diff_value.style.fontSize = 30;
      week_diff_value.x = -2;
    }
  },
  
  
  set weekStart(value) {
    let weekStartDayName = value.toDayNameString();
    if (_weekStartDayName !== weekStartDayName) {    
      week_start_day_name.text = weekStartDayName;
      _weekStartDayName = weekStartDayName;
    }
  
    week_start_day.text = value.toDayString();

    _updateAccentColor(value);
  },
  
  set weekEnd(value) {
    let weekEndDayName = value.toDayNameString();
    if (_weekEndDayName !== weekEndDayName) {
      week_end_day_name.text = weekEndDayName;
      _weekEndDayName = weekEndDayName;
    }
        
    week_end_day.text = value.toDayString();
  },

  animateUp() {
    scroll_indicator.animate('enable');
  },

  animateDown() {
    scroll_indicator.animate('disable');
  }
};