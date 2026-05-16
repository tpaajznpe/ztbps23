const board = document.getElementById("board");

const words = [
  "1", "2", "3", "4", "5",
  "1", "2", "3", "4", "5",
  "1", "2", "3", "4", "5",
  "1", "2", "3", "4", "5",
  "1", "2", "3", "4", "5",
];

let checkedCells = JSON.parse(localStorage.getItem("bingoChecked")) || [];

words.forEach((word, index) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = word;

  if (checkedCells.includes(index)) {
    cell.classList.add("checked");
  }

  cell.addEventListener("click", () => {
    cell.classList.toggle("checked");

    if (cell.classList.contains("checked")) {
      checkedCells.push(index);
    } else {
      checkedCells = checkedCells.filter(i => i !== index);
    }

    localStorage.setItem("bingoChecked", JSON.stringify(checkedCells));
  });

  board.appendChild(cell);
});