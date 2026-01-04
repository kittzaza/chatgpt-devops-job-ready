
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("DevOps Job Ready")
});

server.listen(3000);
console.log("Server running on post 3000");