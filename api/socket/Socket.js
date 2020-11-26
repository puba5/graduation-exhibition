const io = require("socket.io-client");

const SOCKET_ADDR = "http://101.101.216.23:4001";

var socket = io(SOCKET_ADDR);

socket.on("connect", async () => {
  console.log(`Socket [${socket.id}] connected`);
});

var receivedComments = null;
socket.on("COMMENT", (data) => {
  receivedComments = data;
});

const waitForPacket = async (func, time = 5000) =>
  new Promise((resolve, reject) => {
    const WAIT_TIME = 50;
    let result = func();
    const timeoutFunc = (cnt) => () => {
      if (cnt <= 0) reject("Request Timeout");
      result = func();
      if (result !== null) resolve(result);
      setTimeout(timeoutFunc(cnt - 1), WAIT_TIME);
    };
    setTimeout(timeoutFunc(parseInt(time / WAIT_TIME)), WAIT_TIME);
  });

const Socket = {
  getComments: async (id) => {
    socket.emit("GET_COMMENT", id);
    const result = await waitForPacket(() => receivedComments);
    receivedComments = null;
    return result;
  },
  putComment: (id, commentObject) =>
    socket.emit("PUT_COMMENT", { id, commentObject }),
  deleteComment: (id, condition) =>
    socket.emit("DELETE_COMMENT", { id, condition }),
};

module.exports = Socket;
