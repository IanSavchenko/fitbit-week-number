import messaging from "messaging";
import { settingsStorage } from "settings";
import { sendSettings } from './settings';

settingsStorage.onchange = function(evt) {
  sendSettings();
}

messaging.peerSocket.onopen = function() {
  sendSettings();
}

messaging.peerSocket.onerror = function(err) {
  console.log("Connection error: " + err.code + " - " + err.message);
}

