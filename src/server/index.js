const express = require('express');
const app = express();

app.get('/', function routeHelloWorld(req, res) {
    res.send('Hello World!');
});

const server = app.listen(3000, function initServer() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
