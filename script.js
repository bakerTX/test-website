var spideyPhoto = document.querySelector(".spidey-photo");
var spidey2 = document.querySelector(".spidey-2");
var spidey3 = document.querySelector(".spidey-3");

function displayText() {
  window.alert("nice spidey");
}

spideyPhoto.addEventListener("click", displayText);
spidey2.addEventListener("click", displayText);
spidey3.addEventListener("click", displayText);