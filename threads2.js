'use strict';
const threads = require('threads');
var express = require('express');
//var sprintf=require("sprintf-js").sprintf;
var web = express();
//var mode = require('./globaldong');
//var Stopwatch = require('node-stopwatch').Stopwatch;

let run=0;
var interval=0;
var wave=0;
//var stopwatch = Stopwatch.create();
//stopwatch.start();
//console.log(global)
//console.log(mode.wave.run)
const spawn   = threads.spawn;
const thread  = spawn(function() {});
 
thread
.run(function minmax(int, done) {
   //while(true){
       var x = 0;
  setInterval(function(){
      x++;
      x = x>=2000 ? 0 : x;
      console.log(x);
      //console.log(int)
      //console.log(sprintf("%02d",stopwatch.elapsed.hours)+":"+sprintf("%02d",stopwatch.elapsed.minutes)+":"+sprintf("%02d",stopwatch.elapsed.seconds));
      //console.log('au'+5);
  },100)
   //}
})
.send(2)
.on('message', function(minmax) {
  //console.log('min:', minmax.min, ', max:', minmax.max);
})
.on('done', function() {
  thread.kill();
});
web.get('/',function(a,b){
    console.log('root. run '+run)
    b.send('root')
})
web.get('/boot',function(a,b){
    run = 1
    //thread.send(1)
    console.log('boot')
    b.send('boot')
})
web.get('/home',function(a,b){
    console.log('home')
    b.send('home')
})
web.listen(8080,function(){
    console.log('run')
})