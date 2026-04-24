export function renderBoard(container, board, isEnemy, onClick) {
  container.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.style.width = "30px";
      cell.style.height = "30px";
      cell.style.border = "1px solid black";
      cell.style.display = "inline-block";
      cell.style.textAlign = "center";
      cell.style.lineHeight = "30px";

      // utk HIT (merah)
      if (board.hits.some(pos => pos[0] === i && pos[1] === j)) {
        cell.style.backgroundColor = "red";
      }
      

      // utk MISS (grey)
      else if (board.missedAttacks.some(pos => pos[0] === i && pos[1] === j)) {
        cell.style.backgroundColor = "grey";
      }

      // utk click enemy sahaja
      if (isEnemy) {
        cell.addEventListener("click", () => {
          onClick([i, j]);
        });
      }

      container.appendChild(cell);
    }
  }
}