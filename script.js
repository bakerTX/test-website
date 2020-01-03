var spideyPhotos = document.querySelectorAll(".spidey-photo");
  for (var i = 0; i<spideyPhotos.length; i++){
    spideyPhotos[i].addEventListener("click", displayText);
  }

  function displayText() {
    window.alert("nice spidey");
  }