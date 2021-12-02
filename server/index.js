const http = require('http');
const express = require('express');
const app = express();
const server = http.Server(app);
// const io = require('socket.io')(server, {
//   origins: ['http://localhost:3000/*']
// });
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const cors = require('cors');

app.use(cors({
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))

server.listen(8000);

io.on('connection', socket => {
  console.log(`socket_id: ${socket.id} is connected.`);

  // send-msgイベントを受け取ったらブロードキャストする
  socket.on('message', msg => {
    io.send(msg)
    console.log(`receive message: ${JSON.stringify(msg)}`)
  });
});
