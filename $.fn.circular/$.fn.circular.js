$.fn.circular = function(types, selector, fn) {
    var $elements = $(selector), idx = 0;
    this.on(types, function() {
        fn.apply($elements.eq(idx), arguments);
        idx = (idx == $elements.length - 1) ? 0 : idx + 1;
    });
    return this;
};
