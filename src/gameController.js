import Player from "./player.js";
import Ship from "./ship.js";

export default function GameController() {
  const player = Player("real");
  const computer = Player("computer");

  // setup ships
  computer.gameboard.placeShip(Ship(2), [[0,0],[0,1]]);
  computer.gameboard.placeShip(Ship(3), [[2,2],[2,3],[2,4]]);

  player.gameboard.placeShip(Ship(2), [[5,5],[5,6]]);
  player.gameboard.placeShip(Ship(3), [[7,2],[7,3],[7,4]]);

  let currentTurn = "player";
  let gameOver = false;

  function playerAttack(coord) {
    if (gameOver || currentTurn !== "player") return;

    computer.gameboard.receiveAttack(coord);

    if (computer.gameboard.allSunk()) {
      gameOver = true;
      alert("🔥 PLAYER MENANG!");
      return;
    }

    currentTurn = "computer";
    computerTurn();
  }

  function computerTurn() {
    if (gameOver) return;

    let x, y;
    let valid = false;

    // random sampai jumpa coordinate yang belum kena
    while (!valid) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);

      const alreadyHit = player.gameboard.hits.some(p => p[0] === x && p[1] === y);
      const alreadyMiss = player.gameboard.missedAttacks.some(p => p[0] === x && p[1] === y);

      if (!alreadyHit && !alreadyMiss) valid = true;
    }

    player.gameboard.receiveAttack([x, y]);

    if (player.gameboard.allSunk()) {
      gameOver = true;
      alert("💀 COMPUTER MENANG!");
      return;
    }

    currentTurn = "player";
  }

  return {
    player,
    computer,
    playerAttack,
  };
}