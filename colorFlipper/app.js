//colors array
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//click me button
const button = document.querySelector(".btn");

//color text
const colorText = document.querySelector(".color");

//click me button event handling
button.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * colors.length);
  document.querySelector("body").style.backgroundColor = colors[randomNumber];
  colorText.textContent = colors[randomNumber];
});
