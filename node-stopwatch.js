var Stopwatch = require('node-stopwatch').Stopwatch;
var sprintf=require("sprintf-js").sprintf;
var cp = require('child_process')
var stopwatch = Stopwatch.create();
stopwatch.start();
 
/*
my long task here
*/
setInterval(function(){

    if(!process.send){

    }else{
        process.on('message',function(data){
            console.log(data)
        })
    }
    //console.log("ticks: " + stopwatch.elapsedTicks);
    //console.log("milliseconds: " + stopwatch.elapsedMilliseconds);
    //console.log("seconds: " + stopwatch.elapsed.seconds);
    //console.log("minutes: " + stopwatch.elapsed.minutes);
    console.log("hours: " + sprintf("%02d",stopwatch.elapsed.hours)+":"+sprintf("%02d",stopwatch.elapsed.minutes)+":"+sprintf("%02d",stopwatch.elapsed.seconds));
},200)
 
//stop it now 
stopwatch.stop()