const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Leer el archivo HTML
    fs.readFile('index.html', (err, data) => {
        if (err) {
            // En caso de error, retornar un error 500
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.write('<h1>Error interno del servidor</h1>');
            res.end();
        } else {
            // En caso contrario, retornar la página HTML
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000...');
});
