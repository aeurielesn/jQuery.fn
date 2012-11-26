$.fn.touchpress = function(fn){
  var startTime;
  return this.on({
    touchpress: fn,
    touchstart: function(){
      startTime = new Date().getTime();
    },
    touchend: function(){
      var duration = new Date().getTime() - startTime;
      $(this).trigger("touchpress", duration);
    }
  });
};