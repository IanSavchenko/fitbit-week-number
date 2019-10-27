// import {preferences} from 'user-settings';
// import {readAll} from './settings-storage';

export const MAX_WEEK_DIFF = 52;

export let getFirstDayOfWeek = function() {
  // let all = readAll();
  // if (!all || !all.firstDayOfWeek || !all.firstDayOfWeek.values) {
  //   return preferences.firstDayOfWeek;
  // }

  // let value = all.firstDayOfWeek.values[0].value;
  // switch(value) {
  // case('auto'):
  //   return preferences.firstDayOfWeek;
  // case('sunday'):
  //   return 0;
  // case('monday'):
  //   return 1;
  // default: 
  //   return preferences.firstDayOfWeek;
  // }
  return 1; // ISO Week Number always starts on Monday
};

export default {
  getFirstDayOfWeek,
  MAX_WEEK_DIFF
};