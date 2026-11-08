import type { GameRuntime } from "../game/game-runtime";
import type { GameState } from "../features/prod-canvas-game/prod-canvas-game.types";

export interface SetfarmTestBridge {
  readonly states: {
    STATE_GAME: GameState;
  };
  invokeAction(actionRef: string): GameState;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: "manual";
  }
}

export function installSetfarmTestBridge(runtime: GameRuntime): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const bridge: SetfarmTestBridge = {
    get states() {
      return { STATE_GAME: runtime.getState() };
    },
    invokeAction(actionRef: string): GameState {
      return runtime.invokeAction(actionRef);
    },
  };

  window.__SETFARM_TEST_BRIDGE__ = bridge;

  return () => {
    if (window.__SETFARM_TEST_BRIDGE__ === bridge) {
      delete window.__SETFARM_TEST_BRIDGE__;
    }
  };
}
