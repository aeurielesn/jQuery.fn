$.fn.strapline = function(threshold) {
  var $window = $(window);
  return this.each(function() {
    var $strapline = $(this);
    $window.scroll(function(e) {
      var top = $window.scrollTop();
      var opacity = 0.0;
      if (top >= threshold) {
        opacity = 1.0;
      } else {
        opacity = 1.0 - (threshold - top) / threshold;
      }
      $strapline.fadeTo(0, opacity);
    });
  });
};
