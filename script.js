const container = document.querySelector("#container");
const promptButton = document.querySelector("#prompt");

for (let i = 0; i < 16 * 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid-cell");
  container.appendChild(grid);
}

container.addEventListener("mouseover", (event) => {
  console.log(event.target);
  event.target.style.backgroundColor = `rgb(${randomShade()}, ${randomShade()}, ${randomShade()})`;
});

promptButton.addEventListener("click", () => {
  let rowNum = 0;
  do {
    rowNum = +prompt("Enter the number of squares per side for the new grid (max 100)", 1);
  } while (rowNum < 1 || rowNum > 100);

  // clear existing grid
  container.innerHTML = "";

  // calculate size of each grid cell in percentage
  const gridCellSize = 100 / rowNum;

  for (let i = 0; i < rowNum * rowNum; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid-cell");
    grid.style.flex = `0 0 ${gridCellSize}%`;
    grid.style.width = `${gridCellSize}%`;
    grid.style.height = `${gridCellSize}%`;

    container.appendChild(grid);
  }
});

function randomShade() {
  return Math.floor(Math.random() * 255);
}