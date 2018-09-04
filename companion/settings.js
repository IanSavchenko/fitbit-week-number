import { sendMessage } from './messaging';
import { settingsStorage } from "settings";

const FIRST_DAY_OF_WEEK_KEY = "firstDayOfWeek";

export let setDefaultSettings = function() {    
  let firstDayOfWeek = settingsStorage.getItem(FIRST_DAY_OF_WEEK_KEY);
  if (firstDayOfWeek === null) {
    settingsStorage.setItem(
      FIRST_DAY_OF_WEEK_KEY, 
      JSON.stringify({
        selected:[0] // Auto
      }));
  }
}

export let fetchSettings = function() {
  let settings = {};
  for (let i = 0; i < settingsStorage.length; i++) {
    let key = settingsStorage.key(i);
    if (key) {
      var value = settingsStorage.getItem(key);
      try {
        settings[key] = JSON.parse(value);
      }
      catch(ex) {
        settings[key] = value;
      }
    }
  }

  return settings;
}

export let sendSettings = function() {
  sendMessage({
    type: 'settings',
    detail: fetchSettings()
  });
}
