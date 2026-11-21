import { useEffect, useState } from "react";

export const PILLARS = [
  {
    word: "Know",
    copy: "Learn how your breasts usually look and feel.",
  },
  {
    word: "Check",
    copy: "Feel for a new lump. Look for dimpled skin.",
  },
  {
    word: "Act",
    copy: "Speak to a doctor or nurse if you notice a change.",
  },
] as const;

export const STEPS = [
  {
    key: "look",
    title: "Look",
    body: "Stand in front of a mirror, arms down, then raised. Notice the outline, the skin, and the nipples. You are learning your usual — not searching for a flaw.",
  },
  {
    key: "feel",
    title: "Feel",
    body: "Use the flats of three fingers. In the shower or lying down, move across the whole breast, the nipple, and up into the armpit. Start light, then a little firmer.",
  },
  {
    key: "compare",
    title: "Compare",
    body: "Breasts are often uneven, and they change through the month. What matters is something new for you: a lump, a dent, a nipple that has turned, skin that looks different.",
  },
  {
    key: "decide",
    title: "Decide",
    body: "If something is new, speak with a doctor or nurse. You do not need to be sure it is serious. Most changes are not cancer. The ones that are do better when they are seen early.",
  },
] as const;

export const SIGNS = [
  {
    title: "A new lump or thickened area",
    detail: "In the breast, near the nipple, or up in the armpit. It can be painless.",
  },
  {
    title: "Dimpling or puckering",
    detail: "Skin that pulls in, or a patch that looks like orange peel.",
  },
  {
    title: "A change in size or shape",
    detail: "Different from your usual, not just different from the other side.",
  },
  {
    title: "A nipple that turns in",
    detail: "Or points a new way, if that is not how it has always been.",
  },
  {
    title: "Discharge",
    detail: "Fluid that is not breast milk, especially if it is bloody or from one side.",
  },
  {
    title: "Skin or nipple changes",
    detail: "Redness, a rash, crusting, or flaking that does not settle.",
  },
  {
    title: "Swelling",
    detail: "Around the breast, armpit, or collarbone, even with no lump you can feel.",
  },
  {
    title: "Pain that is new",
    detail: "Pain alone is a less common sign. Persistent new pain still deserves a conversation.",
  },
] as const;

export const HABITS = [
  {
    id: "move",
    title: "Move regularly",
    detail: "Walking counts. Most days is enough to matter.",
  },
  {
    id: "food",
    title: "Eat plenty of plants",
    detail: "Vegetables, fruit, pulses, and whole grains.",
  },
  {
    id: "smoke",
    title: "Don’t smoke",
    detail: "Stopping helps more than almost any other daily change.",
  },
  {
    id: "alcohol",
    title: "Keep alcohol low",
    detail: "Less is better. Risk rises with the amount you drink.",
  },
  {
    id: "feed",
    title: "Breastfeed if you can",
    detail: "Only if it is possible and you choose to. It is not a duty.",
  },
] as const;

export type Check = {
  id: string;
  at: string;
  noticedChange: boolean;
  note: string;
  followedUp: boolean;
};

type State = {
  checks: Check[];
  habits: Record<string, string>;
};

const STORAGE_KEY = "know-check-act.v1";
const EMPTY: State = { checks: [], habits: {} };

function isCheck(value: unknown): value is Check {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<Check>;
  return (
    typeof v.id === "string" &&
    typeof v.at === "string" &&
    typeof v.noticedChange === "boolean" &&
    typeof v.note === "string"
  );
}

function load(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<State>;
    const checks = Array.isArray(parsed.checks)
      ? parsed.checks.filter(isCheck).map((c) => ({ ...c, followedUp: Boolean(c.followedUp) })).slice(0, 24)
      : [];
    const habits =
      parsed.habits && typeof parsed.habits === "object" && !Array.isArray(parsed.habits)
        ? Object.fromEntries(
            Object.entries(parsed.habits).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
          )
        : {};
    return { checks, habits };
  } catch {
    return EMPTY;
  }
}

export function currentWeekKey(date = new Date()): string {
  const copy = new Date(date);
  const mondayOffset = (copy.getDay() + 6) % 7;
  copy.setDate(copy.getDate() - mondayOffset);
  copy.setHours(0, 0, 0, 0);
  const month = String(copy.getMonth() + 1).padStart(2, "0");
  const day = String(copy.getDate()).padStart(2, "0");
  return `${copy.getFullYear()}-${month}-${day}`;
}

export function daysSince(iso: string): number {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return 0;
  return Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
}

export function useAwareness() {
  const [state, setState] = useState<State>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(load());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const week = currentWeekKey();

  return {
    hydrated,
    checks: state.checks,
    habitOn(id: string) {
      return state.habits[id] === week;
    },
    addCheck(input: { noticedChange: boolean; note: string }) {
      const entry: Check = {
        id: crypto.randomUUID(),
        at: new Date().toISOString(),
        noticedChange: input.noticedChange,
        note: input.note.trim().slice(0, 400),
        followedUp: false,
      };
      setState((current) => ({ ...current, checks: [entry, ...current.checks].slice(0, 24) }));
    },
    markFollowedUp(id: string) {
      setState((current) => ({
        ...current,
        checks: current.checks.map((check) => (check.id === id ? { ...check, followedUp: true } : check)),
      }));
    },
    removeCheck(id: string) {
      setState((current) => ({
        ...current,
        checks: current.checks.filter((check) => check.id !== id),
      }));
    },
    toggleHabit(id: string) {
      setState((current) => {
        const habits = { ...current.habits };
        if (habits[id] === week) delete habits[id];
        else habits[id] = week;
        return { ...current, habits };
      });
    },
  };
}
