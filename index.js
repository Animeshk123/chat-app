const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 8080;
app.use(express.static('public'));
const io = require('socket.io')(http);

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/index.html');
})

http.listen(port,() => {
  console.log(`server is running on port ${port}`);
})

io.on('connection',(socket) => {
  console.log(`connection successfull`);
  socket.on('message',(msg) => {
    socket.broadcast.emit('new',msg);
  })
})


