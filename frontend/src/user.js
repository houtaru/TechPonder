function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 500);
}

function toggle_heart(x) {
  x.classList.toggle('far');
  x.classList.toggle("fas");
}

function myFunction() {
  var x = document.getElementById("button-user-content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
