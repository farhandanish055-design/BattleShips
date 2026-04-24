
import Gameboard from "../src/gameboard.js";

test("place ship and hit it", () => {
  const board = Gameboard();
  const ship = Ship(1);

  board.placeShip(ship, [[0, 0]]);
  // letak kapal kat (0,0)

  board.receiveAttack([0, 0]);
  // attack coordinate tu

  expect(ship.isSunk()).toBe(true);
  // kapal tenggelam
});

test("missed attack recorded", () => {
  const board = Gameboard();

  board.receiveAttack([1, 1]);
  // attack kosong

  expect(board.missedAttacks.length).toBe(1);
  // miss direkod
});