$.fn.swap = function(selector){
    var $this = this.first();
    var $other = $(selector).first();
    var $marker = $("<span/>").hide();
    $other.after($marker).insertAfter($this);
    return $this.replaceAll($marker);
};
