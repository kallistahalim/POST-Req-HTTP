var http = require("http");
var fs = require("fs");

var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
    fs.readFile(__dirname + "/index.html",function(err, data) {
        res.writeHead(200,{"content-type" : "text/html"}),
        res.end(data);
    })
}

server.listen(PORT, function() {
    console.log("listening on http://localhost:" + PORT);
});