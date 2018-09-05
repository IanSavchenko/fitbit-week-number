import messaging from 'messaging';
import {settingsStorage} from 'settings';
import {sendSettings, setDefaultSettings} from './settings';

settingsStorage.onchange = function() {
  sendSettings();
};

messaging.peerSocket.onopen = function() {
  sendSettings();
};

messaging.peerSocket.onerror = function(err) {
  console.log('Connection error: ' + err.code + ' - ' + err.message);
};

setDefaultSettings();