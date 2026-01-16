const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/toto') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello toto');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})

// Aller voir comment fonctionnent les objets REQ et RES de HTTP et ce qu'on peut faire pour l'exercice