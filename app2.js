const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello World using express');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
});

app.get('/users/:name', (req, res) => {
    let user = req.params.name;
    res.send('<h1>' +user+'</h1>')
});

app.listen(3000, () => {
    console.log("The server is running on localhost 3000");
});