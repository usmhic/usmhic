"use client";

import { useCallback, useSyncExternalStore } from "react";

const changeEvent = "portfolio-preference-change";
const fallbackValues = new Map<string, string>();

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}

/** Keep the server and first browser render identical before restoring preferences. */
export function usePreference<T extends string>(
  key: string,
  initial: T,
  alternate: T,
) {
  const getSnapshot = useCallback(() => {
    let value = fallbackValues.get(key);
    try {
      value = localStorage.getItem(key) ?? value;
    } catch {
      /* Storage may be disabled. */
    }
    return value === alternate ? alternate : initial;
  }, [key, initial, alternate]);
  const value = useSyncExternalStore(subscribe, getSnapshot, () => initial);
  const toggle = () => {
    const next = getSnapshot() === initial ? alternate : initial;
    fallbackValues.set(key, next);
    try {
      localStorage.setItem(key, next);
    } catch {
      /* Keep the preference for this session. */
    }
    window.dispatchEvent(new Event(changeEvent));
  };
  return [value, toggle] as const;
}
