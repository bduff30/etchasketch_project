const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".newGridBtn");

//Create 16x16 grid with hover effect.
for (i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.style.border = "1px solid black";
  grid.style.width = "30px";
  grid.style.height = "30px";
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "blue";
  });
  container.appendChild(grid);
}

//If user clicks 'New Grid' button
newGridBtn.addEventListener("click", () => {
  let input = prompt("Enter # of Rows/Columns");
  if (input <= 100) {
    return input;
  } else {
    alert("Error: 100 is max #");
  }
});
