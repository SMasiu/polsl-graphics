export enum GameDifficulty {
  beginner = "beginner",
  intermediate = "intermediate",
  expert = "expert",
}

export interface GameMode {
  columns: number;
  rows: number;
  bombsCount: number;
}
