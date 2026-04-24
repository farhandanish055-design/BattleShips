import Gameboard from "./gameboard.js";

export default function Player(type) {
  const gameboard = Gameboard();

  return { type, gameboard };
}