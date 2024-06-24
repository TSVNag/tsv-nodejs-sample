const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app)


app.get('/ready', (req, res) => res.status(200).json({status:"ok"}));
app.get('/live', (req, res) => res.status(200).json({status:"ok"}));




app.get('/', (req, res) => {
  
  res.send('Hello from TSV Node.js Starter Application!');
});

app.get('*', (req, res) => {
  res.status(404).send("Not Found");
});

// Listen and serve.
const PORT = 16001;
server.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`);
});
