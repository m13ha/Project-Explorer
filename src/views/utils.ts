/**
 * The gameboard has values 1 - 9/16/25 depending on the difficulty chosen
 * while the tiles in the divs use coordinate numbering for rows and columns
 * e.g. for a 3x3 game, 1 maps to 00 (first row, first column), 3 maps (03)
 * and 9 maps to 33. This function uses the tile number and the size of the game
 * (determined by difficulty) to get the coordinate to be used as class
 * of the tile divs
 * @param index Tile number (e.g. 1-9/16/25) depending on the difficulty
 * @param size The size of the array based on the difficulty (3, 4 or 5)
 * @returns A string representing a class that is used to style the div to render
 * some part of the tile image
 */
export function getCoordsFromNumber(index: number, size: number): string {
  if (index === 0) {
    return "empty";
  } else if (index < 0) {
    throw new Error("Index cannot be negative");
  } else if (index > size ** 2) {
    throw new Error(`Index ${index} cannot be greater than size ${size ** 2}`);
  } else {
    return computeCoordinates();
  }

  function computeCoordinates() {
    const row = Math.ceil(index / size - 1);
    const col = index - size * row - 1;
    return `tile-${row}${col}`;
  }
}
