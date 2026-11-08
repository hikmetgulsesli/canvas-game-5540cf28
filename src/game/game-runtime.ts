import { startGame as applyStartGame } from "../features/surf-play-page/act_start_game";
import { highScoreRepository } from "../features/prod-canvas-game/prod-canvas-game.repo";
import {
  START_GAME_ACTION_REF,
  type GameState,
  type HighScoreRepository,
} from "../features/prod-canvas-game/prod-canvas-game.types";

export interface GameRuntime {
  getState(): GameState;
  subscribe(listener: () => void): () => void;
  startGame(): GameState;
  invokeAction(actionRef: string): GameState;
}

export function createGameRuntime(
  repository: HighScoreRepository = highScoreRepository,
): GameRuntime {
  let state: GameState = {
    highScore: repository.readHighScore(),
    message: "",
    status: "ready",
  };
  const listeners = new Set<() => void>();

  const getState = (): GameState => state;

  const startGame = (): GameState => {
    const nextState = applyStartGame(state);
    repository.writeHighScore(nextState.highScore as number);
    state = nextState;
    listeners.forEach((listener) => listener());
    return state;
  };

  return {
    getState,

    subscribe(listener: () => void): () => void {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },

    startGame,

    invokeAction(actionRef: string): GameState {
      if (actionRef !== START_GAME_ACTION_REF) {
        throw new Error(`UNKNOWN_ACTION:${actionRef}`);
      }
      return startGame();
    },
  };
}
