import {preferences} from 'user-settings';
import {readAll} from './settings-storage';

export let getFirstDayOfWeek = function() {
  let all = readAll();
  if (!all || !all.firstDayOfWeek || !all.firstDayOfWeek.values) {
    return preferences.firstDayOfWeek;
  }

  let value = all.firstDayOfWeek.values[0].value;
  switch(value) {
  case('auto'):
    return preferences.firstDayOfWeek;
  case('sunday'):
    return 0;
  case('monday'):
    return 1;
  default: 
    return preferences.firstDayOfWeek;
  }
};

export default {
  getFirstDayOfWeek
};