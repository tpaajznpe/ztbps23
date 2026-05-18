const board = document.getElementById("board");

const words = [
  "wolanie technika do prezki", "andrzejewski - rozwiazane buty", "wykładowca używa tablicy interaktywnej", "koniec kawy", "5",
  "ogladanie samolotow pod siatkom", "mikrofon ścigały", "FEASTowcy", "pewna osoba pyta jak to zapamietać", "atis u szypera",
  "Kacper je płatki lion", "martyna bez kokardy", "wykładowca każe adzie mówić głośniej", "maciej zadal madre pytanie", "5",
  "1", "filmik - full głośność", "ścigała w hawajce", "prezes ulc mentioned", "yyy tak... na poczatku pytania",
  "sępy wokół martyny", "wilk medytuje", "andrzejewski nie zgłebia tematu", "Ola nie przychodzi", "bartek włącza telewizor",
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
