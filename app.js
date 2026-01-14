const http = require("http");
const handler = require("./handler");
const sumHandler = require("./sum");


const server = http.createServer(handler);

const PORT = 3000;

server.listen(PORT, "0.0.0.0", () =>{
    console.log(`Server is running on port: http://10.7.17.46:${PORT}`);
})