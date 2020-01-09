// basic script to connect with backend using socket
var socket = io();

// when connecting to the server
socket.on('connect', function(){
    console.log('Connected to server');
});

// when disconnecting from the server
socket.on('disconnect', function(){
    console.log('Connection loss');
});

// Client emit data
socket.emit(
    'sendMessage',                              // event name
    { user: 'ivan', msg: 'hola mundo' },        // data to send
    function(res)                               // callback 
    {
        console.log('CallBack event',res);
    }
);

// Client receive data
socket.on('sendMessage', function(msj){
    console.log('Received',msj);
});