var express = require('express');
var app = express();
var fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.resolve(__dirname, "./Static_Response.json"), 'utf8');

app.get('/AmssRestServices/subscriber/getMSPDiscounts', function (req, res) {
    
		res.setHeader('Connection', 'close');
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
})


var server = app.listen(8090, function () {
    var env = " BPI - India";
    console.log("___"+env+"___");
    env = env.trim();
    console.log("___" + env + "___");
    var host = server.address().address
    var port = server.address().port
    console.log("AMSS_REST_STATIC apis listening at http://%s:%s", host, port)
})
