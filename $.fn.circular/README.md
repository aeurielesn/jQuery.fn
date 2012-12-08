$.fn.circular
=============

What
----

An experimental circular event handler.

How
---

    <div>
      <span>This</span>
      <span>is</span>
      <span>an</span>
      <span>experiment!</span>
    </div>
    <button>Next</button>

-

    var $words = $("span");
    $("button").circular("click", $words, function(){
      $words.css("color", "");
      $(this).css("color", "red");
    });
