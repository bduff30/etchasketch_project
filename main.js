function populateGrid(size) {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "blue";
    });
    container.appendChild(square);
  }
}

populateGrid(16);

const newGridBtn = document.querySelector(".newGridBtn");
newGridBtn.addEventListener("click", () => {
  let input = prompt("Enter # of Rows/Columns");
  if (input > 1 && input < 101) {
    populateGrid(input);
  } else {
    alert("Error: # must be 2-100");
  }
});
