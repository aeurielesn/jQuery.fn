$.fn.times
==========

What
----

`Event.times` keep track how many times an event has occurred.

How
---

    ​<button>0 times</button>​​​​​​​​​​​​

-

    $(document).times("click", "button", function(evt) {
      evt.target.innerText = evt.times + " times";
    });​
