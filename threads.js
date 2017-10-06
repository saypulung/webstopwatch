const spawn = require('threads').spawn;

const thread = spawn(function(input, done) {
 // Everything we do here will be run in parallel in another execution context. 
 // Remember that this function will be executed in the thread's context, 
 // so you cannot reference any value of the surrounding code. 
 done({ string : input.string, integer : parseInt(input.string) });
});

thread
 .send({ string : '123' })
 // The handlers come here: (none of them is mandatory) 
 .on('message', function(response) {
   console.log('123 * 2 = ', response.integer * 2);
   thread.kill();
 })
 .on('error', function(error) {
   console.error('Worker errored:', error);
 })
 .on('exit', function() {
   console.log('Worker has been terminated.');
 });