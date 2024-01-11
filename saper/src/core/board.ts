import { GameDifficulty, GameMode } from "../types/game.types";

export const gameModes: Record<GameDifficulty, GameMode> = {
  beginner: {
    columns: 9,
    rows: 9,
    bombsCount: 10,
  },
  intermediate: {
    columns: 16,
    rows: 16,
    bombsCount: 40,
  },
  expert: {
    columns: 16,
    rows: 30,
    bombsCount: 99,
  },
};

export const cellSize = 30;
