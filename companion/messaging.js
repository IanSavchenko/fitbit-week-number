import messaging from "messaging";

export let sendMessage = function({
  type,
  detail
}) {
  var data = {
    type,
    detail
  };

  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send the data to peer as a message
    messaging.peerSocket.send(data);
  }
}
