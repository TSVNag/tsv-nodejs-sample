const express = require('express');
const http = require('http');

var fs = require("fs");
const path = require("path");

const data = fs.readFileSync('./Static_Response.json');

const app = express();
const server = http.createServer(app)



app.get('/ready', (req, res) => res.status(200).json({status:"ok"}));
app.get('/live', (req, res) => res.status(200).json({status:"ok"}));

app.get('/AmssRestServices/subscriber/getMSPDiscounts', function (req, res) {
    
		res.setHeader('Connection', 'close');
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
})

app.get('/', (req, res) => {
  
  res.send('Hello from Node.js Starter Application!');
});

app.get('*', (req, res) => {
  res.status(404).send("Not Found");
});

// Listen and serve.
const PORT = process.env.PORT || 16001;
server.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`);
});
