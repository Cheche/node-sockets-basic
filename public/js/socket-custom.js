// basic script to connect with backend socket
var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');
});

socket.on('disconnet', function(){
    console.log('Connection loss');
});

// Emitiendo info del cliente al server
socket.emit(
    'sendMessage',                              // event name
    { user: 'ivan', msg: 'hola mundo' },        // data to send
    function(res)                               // callback 
    {
        console.log('CallBack event',res);
    }
);

// recibiendo desdel el server
socket.on('enviarMessage', function(msj){
    console.log('Received',msj);
});