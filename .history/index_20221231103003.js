const http   = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write({name: "Anil Sidhu", email: "anilsidhu@shope.com"})
}).listen(43433);
