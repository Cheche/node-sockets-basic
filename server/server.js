const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


let server = http.createServer(app);    // Uso la config de express para el server
module.exports.io = socketIO(server);   // BackEnd Socket = mantiene el socket abierto
require('./sockets/socket');

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
