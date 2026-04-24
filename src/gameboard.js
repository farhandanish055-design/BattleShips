import Ship from "./ship.js";

export default function Gameboard() {
  let ships = [];
  let missedAttacks = [];
  let hits = []; // 👈 track hit coordinates

  function placeShip(ship, coordinates) {
    ships.push({ ship, coordinates });
  }

  function receiveAttack(coord) {
    let hit = false;

    ships.forEach(obj => {
      obj.coordinates.forEach(pos => {
        if (pos[0] === coord[0] && pos[1] === coord[1]) {
          obj.ship.hit();
          hits.push(coord); // 👈 simpan hit
          hit = true;
        }
      });
    });

    if (!hit) {
      missedAttacks.push(coord);
    }
  }

  function allSunk() {
    return ships.every(obj => obj.ship.isSunk());
  }

  return {
    placeShip,
    receiveAttack,
    allSunk,
    missedAttacks,
    ships,
    hits, // 👈 expose
  };
}