const board = document.querySelector("#board");
const squaser_number = 450;

for (let i = 0; i < squaser_number; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.append(square);

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
}

function setColor(element) {
  const arrColor = [
    "#FF9999",
    "#009966",
    "#FFBE73",
    "#63ADD0",
    "white",
    "blue",
    "green",
    "red",
    "broun",
    "orange",
  ];
  const rndNumber = Math.round(Math.random() * 10, 0);
  console.log(rndNumber);
  element.style.backgroundColor = arrColor[rndNumber];
  element.style.boxShadow = `0 0 4px ${arrColor[rndNumber]}, 0 0 10px ${arrColor[rndNumber]}`;
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
