"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/data/site";

const format = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: site.location.timeZone,
});

function subscribe(callback: () => void) {
  const id = window.setInterval(callback, 15_000);
  return () => window.clearInterval(id);
}

/** Studio local time. Renders a neutral placeholder on the server to avoid hydration mismatch. */
export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => "--:--",
  );

  return <time suppressHydrationWarning>{time}</time>;
}
