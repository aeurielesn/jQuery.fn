$.fn.times = function(type, selector, fn) {
    var types = $.trim(type).split(/[ ]+/);
    if (fn === undefined) {
      fn = selector;
      selector = undefined;
    }
    return this.each(function() {
        var $self = $(this);
        $.each(types, function(idx, typ) {
            var times = 0;
            $self.on(typ, selector, function(evt) {
                evt.times = ++times;
                console.log(times);
                fn.call($self, evt);
            });
        });
    });
};
