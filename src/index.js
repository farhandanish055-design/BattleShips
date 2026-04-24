import GameController from "./gameController.js";
import { renderBoard } from "./dom.js";

const game = GameController();

const playerBoard = document.getElementById("player-board");
const enemyBoard = document.getElementById("enemy-board");

function update() {
  renderBoard(playerBoard, game.player.gameboard, false);
  renderBoard(enemyBoard, game.computer.gameboard, true, (coord) => {
    game.playerAttack(coord);
    update(); // refresh selepas turn
  });
}

update();

