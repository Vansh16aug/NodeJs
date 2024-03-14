const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream('input.txt');
    fileStream.pipe(res);
});

server.listen(4000, () => {
    console.log('Server is running on port 3000');
});