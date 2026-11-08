import type { HighScoreRepository } from "./prod-canvas-game.types";

export const HIGH_SCORE_STORAGE_KEY =
  "setfarm.canvas_game.high_score_storage.v1";

function isPersistedHighScore(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function decodeHighScore(serialized: string | null): number | null {
  if (serialized === null) {
    return null;
  }

  try {
    const decoded: unknown = JSON.parse(serialized);
    if (isPersistedHighScore(decoded)) {
      return decoded;
    }

    if (typeof decoded === "object" && decoded !== null && "value" in decoded) {
      const value = (decoded as { value?: unknown }).value;
      return isPersistedHighScore(value) ? value : null;
    }
  } catch {
    // A malformed value is treated as absent; the next start writes a valid one.
  }

  return null;
}

export function createHighScoreRepository(storage?: Storage): HighScoreRepository {
  const getStorage = (): Storage => storage ?? window.localStorage;

  return {
    readHighScore(): number | null {
      try {
        return decodeHighScore(getStorage().getItem(HIGH_SCORE_STORAGE_KEY));
      } catch {
        return null;
      }
    },

    writeHighScore(value: number): void {
      if (!isPersistedHighScore(value)) {
        throw new TypeError("HIGH_SCORE_VALUE_INVALID");
      }
      getStorage().setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(value));
    },
  };
}

export const highScoreRepository = createHighScoreRepository();
