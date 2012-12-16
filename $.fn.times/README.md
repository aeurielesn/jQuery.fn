$.fn.times
==========

What
----

`Event.times` keep track how many times an event has occurred.

How
---

    <span>0 times</span>
    ​<button>0 times</button>​​​​​​​​​​​​
    <button>0 times</button>​​​​​​​​​​​​

-

    var $span = $("span");
    
    $("button").times("click", function(evt) {
      evt.target.innerText = evt.times + " times";
    });
    
    $(document).times("click", "button", function(evt) {
      $span.text(evt.times + " times");
    });
