$.fn.simpletimes
================

What
----

`Event.times` keep track how many times a `click` event has occurred.

How
---

    ​<button>0 times</button>​​​​​​​​​​​​

-

    $("button").simpletimes(function(evt){
      this.innerText = evt.times + " times";
    });