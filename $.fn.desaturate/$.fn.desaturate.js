$.fn.desaturate = function(){
    return this.each(function(){
        var $this = $(this);
        $.each($.fn.desaturate.properties, function(i, property){
            var value = $this.css(property).toLowerCase();
            var desaturated = value;
            $.each($.fn.desaturate.models, function(name, model){
                $.each(model.patterns, function(j, pattern){
                    var parts = value.match(pattern.re);
                    if(parts) {
                        desaturated = model.desaturate.apply(this, pattern.normalize(parts.slice(1)));
                    }
                });
            });
            $this.css(property, desaturated);
        });
    });
};

$.fn.desaturate.properties = [
    "backgroundColor",
    "color"
];

$.fn.desaturate.models = {
    /* RGB(A) color values */
    rgb: {
        patterns: [
            /* Hexadecimal notation (three-digit) */
            {
                re: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/,
                normalize: function(matches){
                    return $.map(matches, function(match){
                        return parseInt(match, 16);
                    });
                }
            },
            /* Hexadecimal notation (six-digit) */
            {
                re: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/,
                normalize: function(matches){
                    return $.map(matches, function(match){
                        return parseInt(match, 16);
                    });
                }
            },
            /* Functional notation */
            {
                re: /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/,
                normalize: function(matches){
                    return matches;
                }
            }
        ],
        desaturate: function(r, g, b, a){
            /* Luminosity method */
            var L = Math.ceil(0.21 * r + 0.71 * g + 0.07 * b);
            return a ? "rgba(" + L + "," + L + "," + L + "," + a + ")" : "rgb(" + L + "," + L + "," + L + ")";
        }
    }
};
