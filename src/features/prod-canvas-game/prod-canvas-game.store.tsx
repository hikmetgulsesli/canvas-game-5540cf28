import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  createGameRuntime,
  type GameRuntime,
} from "../../game/game-runtime";
import { installSetfarmTestBridge } from "../../test/bridge";
import type { ProdCanvasGameContextValue } from "./prod-canvas-game.types";

const ProdCanvasGameContext = createContext<ProdCanvasGameContextValue | null>(
  null,
);

export interface ProdCanvasGameProviderProps {
  children: ReactNode;
  runtime?: GameRuntime;
}

export function ProdCanvasGameProvider({
  children,
  runtime,
}: ProdCanvasGameProviderProps) {
  const [gameRuntime] = useState<GameRuntime>(
    () => runtime ?? createGameRuntime(),
  );
  const state = useSyncExternalStore(
    gameRuntime.subscribe,
    gameRuntime.getState,
    gameRuntime.getState,
  );

  const startGame = useCallback((): void => {
    gameRuntime.startGame();
  }, [gameRuntime]);

  useEffect(() => installSetfarmTestBridge(gameRuntime), [gameRuntime]);

  const value = useMemo<ProdCanvasGameContextValue>(
    () => ({ state, actions: { startGame } }),
    [state, startGame],
  );

  return (
    <ProdCanvasGameContext.Provider value={value}>
      {children}
    </ProdCanvasGameContext.Provider>
  );
}

export function useProdCanvasGame(): ProdCanvasGameContextValue {
  const value = useContext(ProdCanvasGameContext);
  if (value === null) {
    throw new Error("ProdCanvasGameProvider is required");
  }
  return value;
}
