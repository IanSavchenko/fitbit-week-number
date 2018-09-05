// Import the messaging module
import messaging from 'messaging';
import {saveAll as saveSettings} from './settings-storage';

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  switch(evt.data.type) {
  case('settings'):
    saveSettings(evt.data.detail);
    break;
  default:
    console.error(`Unhandled message type: ${evt.data.type}`);
    break;
  }
};