import type { GameState } from "../prod-canvas-game/prod-canvas-game.types";

/**
 * The complete ACT_START_GAME state transition. The action deliberately keeps
 * the current route and leaves the Start control available for another run.
 */
export function startGame(_currentState: GameState): GameState {
  return {
    status: "playing",
    message: "Game started",
    highScore: 0,
  };
}
