const http = require("http");
const app = require("./app");
const port = 8000 || process.env.PORT;

app.set("port", 8000);
const server = http.createServer(app);
server.listen(port);
console.log("Server listening at localhost:8000");
