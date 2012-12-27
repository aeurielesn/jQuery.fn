$.fn.strokelimit = function(delay){
    var lastStroke = 0;
    return this.filter(":input").keydown(function(e){
        var now = new Date().getTime();
        if(now - lastStroke < delay) {
            e.stopPropagation();
            return false;
        }
        lastStroke = now;
    });
};
