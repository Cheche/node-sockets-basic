const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


let server = http.createServer(app);    // Uso la config de express para el server
let io = socketIO(server);              // BackEnd Socket = mantiene el socket abierto

// Escucho el server -> OJO. no es app, es server
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);
    console.log(' ');
    console.log(' ');
    console.log('DOCKER');
    console.log(' ');
    console.log('docker exec -it socket-io_app_node_1 sh --color=auto');

});

// eventos socket en el backend
io.on('connection', (client)=>{

    console.log('BE','client connected');

    // detect discconect
    client.on('disconnect', () => {
        console.log('client discconected');
    });


    //especificando mensaje custom
    client.on('sendMessage', (messaje)=>{
        console.log(messaje);
    });


    //emitiendo del be al fe
    client.emit('enviarMessage',{
        user: 'adminBE',
        messaje: 'welcome'
    });

});

