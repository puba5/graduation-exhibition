const io = require("socket.io-client");

var socketName = `Socket${parseInt(Math.random()*1000)}`
var callbackFunc = () => null;

SOCKET_ADDR = "ws://localhost:3000";

const socket = io(SOCKET_ADDR);
socket.on("connect", () => {
  console.log(`Socket [${socket.id}] connected`);
  Socket.enterGroup("poty");
  Socket.leaveGroup("poty");
});

const Socket = {
  enterGroup: (groupName) => socket.emit("JOIN", groupName),
  leaveGroup: (groupName) => socket.emit("LEAVE", groupName),
  getGroupList: () => null,
  getMemberCount: (groupName) => socket.emit("CNT", gorupName),
  sendEmotion: (emotionType) => socket.emit("EMT", emotionType),
  sendMessage: (message) => socket.emit("MSG", message),
  callback: (func) => (callbackFunc = func),
};
module.exports = Socket;
