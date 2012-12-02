$.fn.simpletemplate
===================

What
----

A simple token replacement function.

How
---

    <div class="template">
      <span>Hello {{name}}!</span>
    </div>

-

    $("div.template").simpletemplate({
      name: "World"
    });
