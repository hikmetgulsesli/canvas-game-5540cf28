import {
  ProdCanvasGameProvider,
  useProdCanvasGame,
} from "./features/prod-canvas-game/prod-canvas-game.store";
import { PlayPageCanvasGame } from "./screens/PlayPageCanvasGame";

function PlayRoute() {
  const { state, actions } = useProdCanvasGame();

  return (
    <PlayPageCanvasGame
      actions={{ "start-1": actions.startGame }}
      highScore={state.highScore}
      message={state.message}
    />
  );
}

export default function App() {
  return (
    <div
      data-setfarm-root="canvas-game"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-950 text-slate-100"
    >
      <ProdCanvasGameProvider>
        <PlayRoute />
      </ProdCanvasGameProvider>
    </div>
  );
}
