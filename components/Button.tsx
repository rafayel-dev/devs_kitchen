import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  /** Opens in a new tab with an ↗ marker. Defaults to true for absolute http(s) URLs. */
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", external, className }: Props) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const isNative = isExternal || href.startsWith("mailto:");
  const cls = `${styles.button} ${styles[variant]} ${className ?? ""}`;
  const arrow = (
    <span className={styles.arrow} aria-hidden="true">
      {isExternal ? "↗" : "→"}
    </span>
  );

  if (isNative) {
    return (
      <a
        href={href}
        className={cls}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {arrow}
        {isExternal && <span className="visually-hidden"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}
