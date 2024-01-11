import { createReducer } from "./store.utils";
import { Minesweeper } from "../core/minesweeper";
import { positionsAroundToReveal } from "../core/position";
import { gameModes } from "../core/board";
import { GameDifficulty } from "../types/game.types";
import { Position2D } from "../types/position.types";
import { ActionType } from "./board.actions";

export interface CellState {
  x: number;
  y: number;
  hasBomb: boolean;
  bombsAround: number;
  revealed: boolean;
  flagged: boolean;
  visited?: boolean;
}

export interface BoardState {
  difficulty: GameDifficulty | null;
  cells: CellState[][] | null;
  completed: boolean;
  won: boolean | null;
  gameStarted: boolean;
}

const initialState: BoardState = {
  difficulty: null,
  cells: null,
  completed: false,
  won: null,
  gameStarted: false,
};

const setBoard = (
  _state: BoardState,
  payload: Pick<BoardState, "cells" | "difficulty">
) => {
  const { cells, difficulty } = payload;
  return { completed: false, won: null, gameStarted: false, cells, difficulty };
};

const revealCell = (state: BoardState, payload: Position2D) => {
  let { cells, difficulty, gameStarted } = state;
  const { x, y } = payload;
  const { rows, columns, bombsCount } = gameModes[difficulty!];

  if (!gameStarted) {
    cells = swapIfBombOnFirstClick(cells!, x, y);
  }

  if (cells![y][x].hasBomb) {
    return { ...state, completed: true, won: false };
  }

  let revealedCells = 0;
  const updatedCells = cells!.map((row) =>
    row.map((cell) => {
      if (cell.x === x && cell.y === y) {
        revealedCells++;
        return { ...cell, revealed: true };
      }
      if (cell.revealed) {
        revealedCells++;
      }
      return cell;
    })
  );

  if (revealedCells === rows * columns - bombsCount) {
    return {
      ...state,
      cells: updatedCells,
      completed: true,
      won: true,
      gameStarted: true,
    };
  }

  return { ...state, cells: updatedCells, gameStarted: true };
};

const revealCellsAround = (state: BoardState, payload: Position2D) => {
  let { cells, difficulty, gameStarted } = state;
  const { x, y } = payload;
  const { rows, columns, bombsCount } = gameModes[difficulty!];

  if (!gameStarted) {
    cells = swapIfBombOnFirstClick(cells!, x, y);
  }

  if (cells![y][x].hasBomb) {
    return { ...state, completed: true, won: false };
  }

  const positionsToReveal = positionsAroundToReveal(x, y, cells!);
  const updatedCells = cells!.map((row) => row.map((cell) => ({ ...cell })));
  positionsToReveal.map(
    ([posX, posY]) => (updatedCells[posY][posX].revealed = true)
  );

  let revealedCells = 0;
  updatedCells.forEach((row) =>
    row.forEach((cell) => {
      if (cell.revealed) {
        revealedCells++;
      }
    })
  );

  if (revealedCells === rows * columns - bombsCount) {
    return {
      ...state,
      cells: updatedCells,
      completed: true,
      won: true,
      gameStarted: true,
    };
  }

  return { ...state, cells: updatedCells, gameStarted: true };
};

const flagCell = (
  state: BoardState,
  payload: Position2D & { flagged: boolean }
) => {
  const { cells } = state;
  const { x, y, flagged } = payload;

  return {
    ...state,
    cells: cells!.map((row) =>
      row.map((cell) =>
        cell.x === x && cell.y === y ? { ...cell, flagged } : cell
      )
    ),
  };
};

const swapIfBombOnFirstClick = (
  board: CellState[][],
  clickedX: number,
  clickedY: number
) => {
  const clickedPosition = board[clickedY][clickedX];
  if (!clickedPosition.hasBomb) {
    return board;
  }
  return Minesweeper.relocateBomb(board, clickedX, clickedY);
};

const handlers = {
  [ActionType.SET_BOARD]: setBoard,
  [ActionType.REVEAL_CELL]: revealCell,
  [ActionType.REVEAL_CELLS_AROUND]: revealCellsAround,
  [ActionType.FLAG_CELL]: flagCell,
};

export const boardReducer = createReducer(initialState, handlers);
