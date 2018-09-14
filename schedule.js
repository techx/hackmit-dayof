let options = document.getElementsByClassName("option");

for (var i = 0; i < options.length; i++) {
  options[i].onclick = function(e) {
    let option = e.target.parentElement.parentElement.getAttribute("option");
    let rows = document.getElementsByTagName("tr");

    for (var j = 0; j < rows.length; j++) {
      let rowOption = rows[j].getAttribute("option");

      if (rowOption === option) {
        rows[j].classList.remove("hidden");
      } else if (rowOption !== null) {
        rows[j].classList.add("hidden");
      }
    }

    options[parseInt(option, 10)].classList.add("selected");
    options[1 - parseInt(option, 10)].classList.remove("selected");
  };
}
