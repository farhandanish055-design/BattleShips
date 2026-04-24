import Player from "../src/player.js";

test("player has a gameboard", () => {
  const player = Player("real");

  expect(player.gameboard).toBeDefined();
  // confirm player ada board
});