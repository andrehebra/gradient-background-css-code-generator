var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var card = document.getElementById("card");
var cssLabel = document.getElementById("csscode");

// body.style.background = "red";

function changeBackground(color1, color2) {
  body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
  card.style.background = "linear-gradient(to left, " + color1.value + " , " + color2.value + ")";
  cssLabel.innerHTML = "CSS: linear-gradient(to right," + color1.value + "," + color2.value + ");";
}

color1.addEventListener("input", function() {
  changeBackground(color1, color2);
})

color2.addEventListener("input", function() {
  changeBackground(color1, color2);
})

changeBackground(color1, color2);
