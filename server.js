var http = require("http");
var fs = require("fs");
var url = require("url");

var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
 
    req.setEncoding("utf8");

    var path = req.url;

    switch(path) {

        case "/" :
            return homePage(res);

        case "/happy" :
            return showJSON(req, res);
    }
    
}

function homePage(res) {
    fs.readFile(__dirname + "/index.html",function(err, data) {
        res.writeHead(200, {"content-type" : "text/html"}),
        res.end(data);
        
    })
}

function showJSON(req, res) {
    var allData = "/?";

    req.on('data', function(data) {
        allData += data;
    });

    req.on('end', function() {
        console.log(url.parse(allData, true).query);
    });
    

    res.writeHead(200, {"content-type" : "text/html"})
    res.end();
    // console.log(allData);

}



server.listen(PORT, function() {
    console.log("listening on http://localhost:" + PORT);
});