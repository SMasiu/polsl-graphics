import { gameModes } from "./board";
import { CellState } from "../store/board.store";
import { GameDifficulty } from "../types/game.types";
import { Position2DTuple } from "../types/position.types";
import { randomPosition, adjacentPositions } from "./position";

export class Minesweeper {
  board: CellState[][] = [];

  static relocateBomb(
    board: CellState[][],
    ignoredX: number,
    ignoredY: number
  ) {
    const boardCopy = board.map((row) => row.map((cell) => ({ ...cell })));
    const rowsCount = boardCopy.length;
    const columnsCount = boardCopy[0].length;

    let bombPlanted = false;
    while (!bombPlanted) {
      const [xPos, yPos] = randomPosition(rowsCount, columnsCount);
      if (!boardCopy[yPos][xPos].hasBomb) {
        boardCopy[yPos][xPos].hasBomb = true;
        adjacentPositions(xPos, yPos, rowsCount, columnsCount).forEach(
          ([adjX, adjY]) => {
            boardCopy[adjY][adjX].bombsAround++;
          }
        );
        bombPlanted = true;
      }
    }

    boardCopy[ignoredY][ignoredX].hasBomb = false;
    adjacentPositions(ignoredX, ignoredY, rowsCount, columnsCount).forEach(
      ([adjX, adjY]) => {
        boardCopy[adjY][adjX].bombsAround--;
      }
    );

    return boardCopy;
  }

  buildGame(difficulty: GameDifficulty) {
    const { rows, columns, bombsCount } = gameModes[difficulty];
    this.buildBoard(rows, columns);
    this.plantBombs(bombsCount);
    this.setAdjacentBombsCount();

    return this.board;
  }

  buildBoard(rows: number, columns: number) {
    for (let i = 0; i < rows; i++) {
      this.board.push([]);
      for (let j = 0; j < columns; j++) {
        this.board[i][j] = {
          x: j,
          y: i,
          hasBomb: false,
          bombsAround: 0,
          revealed: false,
          flagged: false,
        };
      }
    }
  }

  plantBombs(bombsCount: number) {
    const rowsCount = this.board.length;
    const columnsCount = this.board[0].length;

    const invalidBombCount =
      bombsCount < 1 || rowsCount * columnsCount <= bombsCount;
    if (invalidBombCount) {
      throw new Error(
        "Bombs count should be a positive number lower than the available cells count"
      );
    }

    let bombsPlanted = 0;

    while (bombsPlanted < bombsCount) {
      const [xPos, yPos] = randomPosition(rowsCount, columnsCount);
      if (!this.board[yPos][xPos].hasBomb) {
        this.board[yPos][xPos].hasBomb = true;
        bombsPlanted++;
      }
    }
  }

  setAdjacentBombsCount() {
    const rowsCount = this.board.length;
    const columnsCount = this.board[0].length;

    let bombPositions: Position2DTuple[] = [];
    this.board.forEach((rows) =>
      rows.forEach((cell) => {
        if (cell.hasBomb) {
          bombPositions.push([cell.x, cell.y]);
        }
      })
    );

    bombPositions.forEach(([x, y]: Position2DTuple) => {
      adjacentPositions(x, y, rowsCount, columnsCount).forEach(
        ([adjX, adjY]) => {
          this.board[adjY][adjX].bombsAround++;
        }
      );
    });
  }
}
