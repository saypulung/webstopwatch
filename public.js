var helloPol = 1
exports.hello = function(){return "Hello";}
exports.addHello = function(){helloPol+=2;return helloPol;}
exports.getHello = function(){return helloPol;}
module.exports