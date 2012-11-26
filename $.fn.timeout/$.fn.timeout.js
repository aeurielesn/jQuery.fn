$.fn.timeout = function(fn, delay){
  var self = this;
  setTimeout(function(){
    self.each(function(){
      fn.call(this);
    });
  }, delay);
  return this;
};