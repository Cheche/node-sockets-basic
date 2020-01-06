const { io } = require('../server');

// eventos socket en el backend
io.on('connection', (client)=>{

    console.log('BE','client connected');

    // detect discconect
    client.on('disconnect', () => {
        console.log('client discconected');
    });


    //especificando mensaje custom
    client.on('sendMessage', (messaje, callback)=>{
        console.log(messaje);

        if ( messaje.user ) {
            callback({ok: true}); // disparo callback
        } else {
            callback({ok: false}); // disparo callback
        }
    });


    //emitiendo del be al fe
    client.emit('enviarMessage',{
        user: 'adminBE',
        messaje: 'welcome'
    });

});

