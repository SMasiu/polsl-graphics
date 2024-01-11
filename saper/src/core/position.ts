import { CellState } from "../store/board.store";
import { Position2DTuple } from "../types/position.types";

export const randomPosition = (rowsCount: number, columnsCount: number) => {
  return [
    Math.floor(Math.random() * columnsCount),
    Math.floor(Math.random() * rowsCount),
  ];
};

export const adjacentPositions = (
  x: number,
  y: number,
  rowsCount: number,
  columnsCount: number
) => {
  let positions = [];

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (
        (i !== x || j !== y) &&
        i >= 0 &&
        j >= 0 &&
        i < columnsCount &&
        j < rowsCount
      ) {
        positions.push([i, j]);
      }
    }
  }

  return positions;
};

export const positionsAroundToReveal = (
  x: number,
  y: number,
  board: CellState[][]
) => {
  const boardCopy = board.map((row) => row.map((cell) => ({ ...cell })));

  const rowsCount = boardCopy.length;
  const columnsCount = boardCopy[0].length;
  let positionsToVisit = [[x, y]];
  let positionsToReveal = [];

  while (positionsToVisit.length !== 0) {
    const [posX, posY] = positionsToVisit.shift() as Position2DTuple;
    let currentPosition = boardCopy[posY][posX];

    if (currentPosition.visited) {
      continue;
    }

    currentPosition.visited = true;
    positionsToReveal.push([currentPosition.x, currentPosition.y]);

    if (currentPosition.bombsAround > 0) {
      continue;
    }

    const neighbors = adjacentPositions(posX, posY, rowsCount, columnsCount);
    positionsToVisit.push(
      ...neighbors.filter(
        ([adjX, adjY]) =>
          !boardCopy[adjY][adjX].visited &&
          !boardCopy[adjY][adjX].revealed &&
          !boardCopy[adjY][adjX].hasBomb
      )
    );
  }

  return positionsToReveal;
};
