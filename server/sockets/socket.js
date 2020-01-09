const { io } = require('../server');

// When a client connect to the server
io.on('connection', (client)=>{

    console.log('BE','client connected');

    // detect discconect
    client.on('disconnect', () => {
        console.log('client discconected');
    });


    // Receive data from a client. Send callback or emit boradcast
    client.on('sendMessage', (data, callback)=>{

        console.log(data);
        // client.emit('enviarMessage', data);  // return data to same client
        // if ( data.user ) {
        //     callback({ok: true});            // Calback with info for client
        // } else {
        //     callback({ok: false});
        // }
        client.broadcast.emit('sendMessage',data); // sending data to all connected clients
    });


    // Send data from server
    client.emit('sendMessage',{
        user: 'adminBE',
        messaje: 'welcome'
    });

});

