$.fn.mousehold
==============

What
----

Repeats a `mousedown` event at a given interval of time
until a `mouseup` one occurs.

How
---

    $(document).mousehold("button", function(evt){
    	console.log(evt.times);
    }, 100);
