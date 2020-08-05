var modal = document.getElementById("aboutus");
var btn = document.getElementById("about");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.display = "block"
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("contactus");
var btn = document.getElementById("contact");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

