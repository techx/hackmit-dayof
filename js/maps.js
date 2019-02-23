---
# empty front matter so that Jekyll references in this file get replaced
---
var active = "{{ site.data.maps.first.name }}";
var buttons = document.getElementsByClassName("button");

buttons[0].classList.add("active");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    var target = event.target;

    if (target.tagName.toLowerCase() !== "h2") {
      target = target.childNodes[1];
    }

    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");

      if (buttons[j].childNodes[1].innerHTML == target.innerHTML) {
        buttons[j].classList.add("active");

        var map = document.getElementById("map");

        if (j === 0) {
          map.setAttribute("src", "{{ site.data.maps.first.url | relative_url }}");
        } else {
          map.setAttribute("src", "{{ site.data.maps.last.url | relative_url }}");
        }
      }
    }
  });
}
