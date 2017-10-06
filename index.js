var express = require('express')
var app = express()
var port = 8080

app.get('/',function(req,res){
  res.send ('OKKK')
})
app.get('/ambil',function(req,res){
  var public = require('./public')
  console.log(public.hello())
  res.send('f')
})
app.get('/set',function(req,res){
  var public = require('./public')
  console.log(public.addHello())
  res.send('f')
})
app.listen(port)