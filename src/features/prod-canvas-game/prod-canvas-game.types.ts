export const GAME_STATE_REF = "STATE_GAME" as const;
export const START_GAME_ACTION_REF = "ACT_START_GAME" as const;

export type GameStatus = "ready" | "playing";

export interface GameState {
  highScore: number | null;
  message: string;
  status: GameStatus;
}

export interface HighScoreRepository {
  readHighScore(): number | null;
  writeHighScore(value: number): void;
}

export interface GameActions {
  startGame(): void;
}

export interface ProdCanvasGameContextValue {
  state: GameState;
  actions: GameActions;
}
