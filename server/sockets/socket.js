const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        // console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal!!!!!!!!!!'
        //     });
        // }

        
    });

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

});