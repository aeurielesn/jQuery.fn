$.fn.comments = function() {
    return this.map(function() {
        return $.grep(this.childNodes, function(child) {
            return child.nodeType == Node.COMMENT_NODE;
        });
    });
};
