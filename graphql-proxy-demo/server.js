var express = require('express');
var request = require('request');
const app = express()

app.post("/proxy",function(req, res){
  var remote = request('http://localhost:4000/graphql');
  req.pipe(remote);
  remote.pipe(res);
});

app.use(express.static('public'));

app.listen(5000);
console.log('Running a server at localhost:5000/');