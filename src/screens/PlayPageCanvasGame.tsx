// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasGameActionId = "start-1";

export interface PlayPageCanvasGameProps {
  actions?: {
    "start-1"?: () => void;
  };

}

export type PlayPageCanvasGameActionCallbacks = NonNullable<PlayPageCanvasGameProps["actions"]>;

export function PlayPageCanvasGame({ actions }: PlayPageCanvasGameProps) {
  return (
    <>
      {/* Route Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_RETAINED">
          {/* Top Decorative Header Bar (Non-actionable) */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/30">
                C
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-white">Canvas Game</span>
                <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/60">Arcade Arena</span>
              </div>
            </div>
      
            {/* Observable Status Metrics */}
            <div className="flex items-center space-x-6">
              {/* High Score Observable */}
              <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-1.5 rounded-lg border border-slate-700/60">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">High Score</span>
                <div className="text-sm font-bold text-amber-400 tabular-nums" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE"></div>
              </div>
      
              {/* Game Status Observable */}
              <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-1.5 rounded-lg border border-slate-700/60">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Status</span>
                <div className="text-sm font-medium text-emerald-400" data-setfarm-element-ref="E000003" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE"></div>
              </div>
            </div>
          </header>
      
          {/* Main Workspace */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl flex flex-col items-center">
              {/* Contained Surface: SURF_GAME_CANVAS */}
              <div data-surface-id="SURF_GAME_CANVAS" className="w-full aspect-[16/9] max-h-[520px] bg-slate-950 rounded-xl border border-slate-800/90 relative overflow-hidden flex flex-col items-center justify-center shadow-inner" data-setfarm-element-ref="E000004">
                {/* Subtle decorative grid pattern inside canvas */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
                {/* Canvas graphic decorative elements */}
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                  <div className="w-20 h-20 rounded-2xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 shadow-lg shadow-indigo-500/10">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">Canvas Arena Ready</h2>
                  <p className="text-sm text-slate-400 max-w-sm">Press start below to enter the game arena, dodge obstacles, and set the high score.</p>
                </div>
              </div>
      
              {/* Controls Toolbar Container on SURF_PLAY_PAGE */}
              <div className="mt-6 w-full flex items-center justify-between border-t border-slate-800/80 pt-6 px-2">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Desktop Display 60 FPS</span>
                </div>
      
                {/* Physical Control Slot: CSLOT_START_GAME_START_BUTTON */}
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-colors flex items-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" data-action-id="start-1" onClick={actions?.["start-1"]}>
                  <span>Start</span>
                </button>
              </div>
            </div>
          </main>
      
          {/* Footer Decorative Chrome (Non-actionable) */}
          <footer className="border-t border-slate-800/60 py-4 px-8 text-center text-xs text-slate-400">
            <span>Canvas Game Environment © All rights reserved.</span>
          </footer>
        </div>
    </>
  );
}
