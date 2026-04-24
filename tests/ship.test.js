import Ship from "../src/ship.js";

test("ship gets hit", () => {
  const ship = Ship(3); 
  // create kapal panjang 3

  ship.hit(); 
  // kena tembak sekali

  expect(ship.isSunk()).toBe(false); 
  // belum tenggelam sebab baru 1 hit
});

test("ship sinks after enough hits", () => {
  const ship = Ship(2);

  ship.hit();
  ship.hit();
  // kena tembak 2 kali

  expect(ship.isSunk()).toBe(true); 
  // sekarang dah tenggelam
});