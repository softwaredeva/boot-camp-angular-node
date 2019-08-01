const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.get('/', function(req, res){
  res.send('Hello World!')
});

app.post('/', function(req, res){
  res.send('Método POST')
});

app.put('/user', function(req, res){
  res.send('Método PUT')
});

app.delete('/user', function(req, res){
  res.send('Método DELETE')
});

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`));
