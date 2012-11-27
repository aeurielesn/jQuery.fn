$.fn.fadetrain = function(duration) {
  var $elements = this;
  if ($elements.length) {
      var $el = $elements.get(0);
      $($el).fadeOut(duration, function() {
          $elements.slice(1).fadetrain(duration);
      });
  }
  return $elements;
};
