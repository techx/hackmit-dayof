document.getElementById("hamberder").onclick = function(e) {
  document.getElementById("mobile-nav").classList.remove("hidden");
};

document.getElementById("close").onclick = function(e) {
  document.getElementById("mobile-nav").classList.add("hidden");
};
