var cp = require('child_process');
var stop = 0;
if (!process.send) {
  var p = cp.fork(__dirname + '/forktest');
  p.send({
    count: 100
  });
  p.on('message', function(data) {
    if(typeof data.off!=='undefined'){
      var off = data.off
      stop = off
      console.log(off)
    }
    //process.exit(0);
  });
} else {
  process.on('message', function(data) {
    //console.log(data);
    
    if(stop==1){
      console.log(data);
      //p.send({off:1})
    }
    
    data.count--;
    if (data.count <= 0) {
      console.log('senddata')
      process.send({off:1});
      //process.exit(0);
    }
    
    var p = cp.fork(__dirname + '/forktest');
    p.send(data);
    p.on('message', function(data) {
      process.send(data);
    });
    
  });
}
