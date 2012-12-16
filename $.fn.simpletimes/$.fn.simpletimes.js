$.fn.simpletimes = function(fn) {
    return this.each(function() {
        var $this = $(this);
        var times = 0;
        return $this.click(function(evt) {
            evt.times = ++times;
            fn.call(this, evt);
        });
    });
};
