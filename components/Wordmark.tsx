import styles from "./Wordmark.module.css";

/** DEVS KITCHEN wordmark. The orange square is the "pilot light" — the one constant accent. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`${styles.wordmark} ${className ?? ""}`}>
      <span>DEVS</span>
      <span>KITCHEN</span>
      <span className={styles.pilot} aria-hidden="true" />
    </span>
  );
}
