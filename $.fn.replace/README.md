$.fn.replace
============

What
----

A simple chainable string replace function that doesn't screw your bindings.

How
---

    <span>Hello world!</span>

-

    var leetspeak = { e: 3, l: 7, o: 0 };
    $("span").replace(/[elo]/gi, function(ch){
      return leetspeak[ch];
    });
