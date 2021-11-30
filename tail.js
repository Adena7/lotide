const assertEqual = require('./assertEqual');

const tail = function(array) {
  let tail = array.slice(1);
  return tail;
};

tail(["Hello", "Lighthouse", "Labs"]);

module.exports = tail;