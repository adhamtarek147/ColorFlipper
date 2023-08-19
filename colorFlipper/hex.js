//hexa numbers
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//click me button
const button = document.querySelector(".btn");

//color text
const colorText = document.querySelector(".color");

button.addEventListener("click", function () {
  const color = generateHexaColor();
  document.querySelector("body").style.backgroundColor = color;
  colorText.textContent = color;
});

//function to generate random hexa color
function generateHexaColor() {
  let hexaColorArray = ["#"];
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.trunc(Math.random() * hex.length);
    hexaColorArray.push(String(hex[randomIndex]));
  }
  return hexaColorArray.join("");
}
