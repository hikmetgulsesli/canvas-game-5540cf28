import type { GameState } from "../features/prod-canvas-game/prod-canvas-game.types";

export function createReadyGameFixture(): GameState {
  return {
    highScore: null,
    message: "",
    status: "ready",
  };
}

export function createStartedGameFixture(): GameState {
  return {
    highScore: 0,
    message: "Game started",
    status: "playing",
  };
}
