const threads = require('threads');
const spawn   = threads.spawn;
const thread  = spawn(function() {});
 
thread
  .run(function minmax(int, done) {
    setInterval(function(){console.log('au')},100)
  })
  .send(2)
  .on('message', function(minmax) {
    console.log('min:', minmax.min, ', max:', minmax.max);
  })
  .on('done', function() {
    thread.kill();
  });