$.fn.simpletext = function() {
    var $clone = this.clone();
    var text = $clone.children().remove().end().text();
    $clone.remove();
    return text;
};
