var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
	document.getElementById("navbar-scroll").style.top = "0";
  } else {
	document.getElementById("navbar-scroll").style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}