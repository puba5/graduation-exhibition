const io = require("socket.io-client");

var socketName = `Socket${parseInt(Math.random() * 1000)}`;
// var callbackFunc = () => null;

const SOCKET_ADDR = "http://localhost:4000";

var socket = io(SOCKET_ADDR);

socket.on("connect", async () => {
  console.log(`Socket [${socket.id}] connected`);
  // 이렇게 사용하기
  // Socket.putComment(5, {name:"성혁", age: 25});
  // console.log( await Socket.getComments(5) );
});

var receivedComments = null;
socket.on("COMMENT", (data) => {
  receivedComments = data;
});

const waitForPacket = async (func, time = 1000) =>
  new Promise((resolve, reject) => {
    const WAIT_TIME = 50;
    let result = func();
    const timeoutFunc = (cnt) => () => {
      if (cnt <= 0) reject("Request Timeout");
      result = func();
      if( result !== null )
        resolve(result);
      setTimeout(timeoutFunc(cnt - 1), WAIT_TIME);
    };
    setTimeout(timeoutFunc(parseInt(time / WAIT_TIME)), WAIT_TIME);
  });

const Socket = {
  // enterGroup: (groupName) => socket.emit("JOIN", groupName),
  // leaveGroup: (groupName) => socket.emit("LEAVE", groupName),
  // getGroupList: () => null,
  // getMemberCount: (groupName) => socket.emit("CNT", gorupName),
  // sendEmotion: (emotionType) => socket.emit("EMT", emotionType),
  // sendMessage: (message) => socket.emit("MSG", message),
  // callback: (func) => (callbackFunc = func),

  // await getComments( 5 ); // 5번 방의 댓글 불러오기 return type: Object[]
  getComments: async (id) => {
    socket.emit("GET_COMMENT", id);
    const result = await waitForPacket(() => receivedComments);
    receivedComments = null;
    return result;
  },
  putComment: (id, commentObject) => socket.emit("PUT_COMMENT", {id, commentObject})
};

module.exports = Socket;
