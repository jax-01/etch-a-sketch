const container = document.querySelector("#container");
const promptButton = document.querySelector("#prompt");

for (let i = 0; i < 16 * 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid-cell");
  container.appendChild(grid);
}

container.addEventListener("mouseover", (event) => {
  console.log(event.target);
  event.target.classList.add("shade");
});

promptButton.addEventListener("click", () => {
  let rowNum = 0;
  do {
    rowNum = +prompt("Enter the number of squares per side for the new grid (max 100)", 1);
  } while (rowNum < 1 || rowNum > 100);
});