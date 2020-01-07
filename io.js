var io = require('socket.io')();

io.on('connection', function(socket){
    console.log('client connected to socket');
    socket.on('new-msg',function(data){
        io.emit('new-msg', data)
    });
});

module.exports = io;