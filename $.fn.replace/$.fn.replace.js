$.fn.replace = function(pattern, newstr) {
  this.contents().each(function() {
    if (this.nodeType == Node.TEXT_NODE) {
      this.data = this.data.replace(pattern, newstr);
    }
  });
  return this;
};
