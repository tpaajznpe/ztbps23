const board = document.getElementById("board");

const words = [
  "wolanie technika do prezki",
  "aca - rozwiazane buty",
  "wykładowca używa tablicy interaktywnej",
  "koniec kawy",
  "wywyższanie się służb",
  "ogladanie samolotow pod siatka",
  "trzeszczacy mikrofon kta",
  "FEASTowcy",
  "pewna osoba pyta jak to zapamietać",
  "atis u ati",
  "Kacper je płatki lion",
  "maciej",
  "wykładowca każe Adzie mówić głośniej",
  "12 lat szkoly muzycznej",
  "auu tankering/ teneryfa",
  "jebac pilotów",
  "filmik - full głośność",
  "kta w hawajce",
  "prezes ulc mentioned",
  "yyy tak... na poczatku pytania",
  "sępy wokół Martyny",
  "auu medytuje",
  "aca nie zgłebia tematu",
  "ope nie przychodzi",
  "bartek włącza telewizor",

  // możesz dodawać ile chcesz
  "My jako grupa..",
  "Cisowianka Perlage",
  "Szlug shk",
  "pytanie przechwalcze",
  "ope chwali nasza grupe",
  "kacper jedzie na zawody kostki",
  "zmiana harmono- gramu",
  "roast/ przeklinanie cpr",
  "wykładowca dissuje pewna osobe",
  "wzajemne spojrzenia po pytaniu pewnej osoby",
  
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// LOSOWANIE TYLKO PRZY PIERWSZYM WEJŚCIU
let boardWords = JSON.parse(localStorage.getItem("bingoBoard"));

if (!boardWords) {
  boardWords = shuffle(words).slice(0, 25);

  localStorage.setItem(
    "bingoBoard",
    JSON.stringify(boardWords)
  );
}

// ZAPIS ZAZNACZEŃ
let checkedCells =
  JSON.parse(localStorage.getItem("bingoChecked")) || [];

// TWORZENIE PLANSZY
boardWords.forEach((word, index) => {

  const cell = document.createElement("div");

  cell.classList.add("cell");
  cell.innerText = word;

  if (checkedCells.includes(index)) {
    cell.classList.add("checked");
  }

  cell.addEventListener("click", () => {

    cell.classList.toggle("checked");

    if (cell.classList.contains("checked")) {

      if (!checkedCells.includes(index)) {
        checkedCells.push(index);
      }

    } else {

      checkedCells =
        checkedCells.filter(i => i !== index);
    }

    localStorage.setItem(
      "bingoChecked",
      JSON.stringify(checkedCells)
    );
  });

  board.appendChild(cell);
});

// RESET PLANSZY
function resetBoard() {

  localStorage.removeItem("bingoBoard");
  localStorage.removeItem("bingoChecked");

  location.reload();
}
