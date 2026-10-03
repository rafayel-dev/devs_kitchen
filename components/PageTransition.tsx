import { ViewTransition } from "react";

/** Soft cross-fade between routes. Wrap each page's content (not the layout). */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-fade" exit="page-fade" default="none">
      {children}
    </ViewTransition>
  );
}
