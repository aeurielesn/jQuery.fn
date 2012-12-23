$.fn.margin = function(){
    var $this = this.first();
    var margin = {};
    $.each(["top", "bottom", "left", "right"], function(i, name){
        margin[name] = parseFloat($this.css("margin-" + name)) || 0;
    });
    return margin;
};
