$.fn.simpletemplate = function(variables) {
    return this.each(function() {
        this.innerHTML = this.innerHTML.replace(/{{(.+)}}/g, function(match, variable) {
            return variables[variable];
        });
        return this;
    });
};
