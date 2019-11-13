var http = require('http');
var os = require('os');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    {
      "telefone": "3376-1921",
      "DDD": "41",
      "celular": "995897781",
      "email": "email@gmail.com",
    }
    `);
}).listen(8080);