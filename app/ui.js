import document from "document";

const week_number_first = document.getElementById("week_number_first"),
const week_number_second = document.getElementById("week_number_second");
      
const week_diff = document.getElementById("week_diff");
const week_diff_value = week_diff.getElementById("week_diff_value");

const week_start_day_name = document.getElementById("week_start_day_name");
const week_end_day_name = document.getElementById("week_end_day_name");

const week_start_day = document.getElementById("week_start_day");
const week_end_day = document.getElementById("week_end_day");

const up_triangle = document.getElementById('up_triangle');
const down_triangle = document.getElementById('down_triangle');

const touch_handler = document.getElementById('touch_handler');

// variables to hold state of UI and do fewer UI calls
// improves visual performance of the app
// especially, when animation is involved
let weekDiffVisible = false;
let weekStartDayNameSet = false;
let weekEndDayNameSet = false;
let canGoUp = true;
let canGoDown = true;

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
    } else {
      week_diff_value.text = '';
    }
    
    if (value === 0 && weekDiffVisible) {
      week_diff.animate("disable");
      weekDiffVisible = false;
    } else if (value != 0 && !weekDiffVisible) {
      week_diff.animate("enable");
      weekDiffVisible = true;
    }
    
    if (value >= 52 && canGoUp) {
      up_triangle.style.display = 'none';
      canGoUp = false;
    } else if (value < 52 && !canGoUp) {
      up_triangle.style.display = 'inline';
      canGoUp = true;
    }
    
    if (value <= -52 && canGoDown) {
      down_triangle.style.display = 'none';
      canGoDown = false;
    } else if (value > -52 && !canGoDown) {
      down_triangle.style.display = 'inline';
      canGoDown = true;
    }
  },
  
  
  set weekStart(value) {
     if (!weekStartDayNameSet) {    
      week_start_day_name.text = value.toDayNameString();
      weekStartDayNameSet = true;
    }
  
    week_start_day.text = value.toDayString();
  },
  
  
  set weekEnd(value) {
    if (!weekEndDayNameSet) {
      week_end_day_name.text = value.toDayNameString();
      weekEndDayNameSet = true;
    }
        
    week_end_day.text = value.toDayString();
  }
};