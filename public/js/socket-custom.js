var socket = io();

    socket.on('connect', function() {
        console.log('Conectado al servidor');
    });

    // Escuchar
    socket.on('disconnect', function() {
        console.log('Perdimos conexión con el servidor');
    });

    // Enviar información
    socket.emit('enviarMensaje', {
        usuario: 'Aaron',
        mensaje: 'Hola Mundo'
    }, function(resp) {
        console.log('Repuesta server', resp);
    });

    // Escuchar información
    socket.on('enviarMensaje', function(mensaje) {
        console.log(mensaje);
    });