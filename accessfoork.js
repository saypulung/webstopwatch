var express = require('express')
var cp = require('child_process')
var app = express()

var p = cp.fork(__dirname + '/node-stopwatch');

app.get('/',function(req,res){
    res.send('root')
})
app.get('/sendata/(:value)',function(req,res){
    var v = 5;
    console.log(v)
    p.send({
        count:v
      });
    res.send('Send '+v)
})
app.listen(8080)