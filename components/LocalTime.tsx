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

  // Hidden until the real time is known, then fades in — no "--:--" flash.
  return (
    <time suppressHydrationWarning data-pending={time === "--:--" || undefined}>
      {time}
    </time>
  );
}
