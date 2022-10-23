function hamburger() {
    var x = document.getElementById("hamburger");
    if (x.style.display === "inline-flex") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-flex";
    }
  }