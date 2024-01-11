import { CellState } from "./board.store";
import { GameDifficulty } from "../types/game.types";

export enum ActionType {
  SET_BOARD = "SET_BOARD",
  REVEAL_CELL = "REVEAL_CELL",
  REVEAL_CELLS_AROUND = "REVEAL_CELLS_AROUND",
  FLAG_CELL = "FLAG_CELL",
}

export const setBoard = (
  cells: CellState[][] | null,
  difficulty: GameDifficulty | null
) => ({
  type: ActionType.SET_BOARD,
  payload: { cells, difficulty },
});

export const revealCell = (x: number, y: number) => ({
  type: ActionType.REVEAL_CELL,
  payload: { x, y },
});

export const revealCellsAround = (x: number, y: number) => ({
  type: ActionType.REVEAL_CELLS_AROUND,
  payload: { x, y },
});

export const flagCell = (x: number, y: number, flagged: boolean) => ({
  type: ActionType.FLAG_CELL,
  payload: { x, y, flagged },
});
