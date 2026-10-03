"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const close = useCallback(() => setOpen(false), []);

  // Close the menu whenever the route changes (adjusting state during render).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const header = headerRef.current;
    document.documentElement.style.overflow = "hidden";
    header?.querySelector<HTMLAnchorElement>("[data-menu-link]")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !header) return;
      // Keep focus inside the header + open menu.
      const focusables = Array.from(
        header.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => el.offsetParent !== null);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={styles.header}
      data-scrolled={scrolled || undefined}
      data-open={open || undefined}
    >
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} — home`} onClick={close}>
          <Wordmark />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className={styles.cta}>
          Let&rsquo;s talk <span aria-hidden="true">→</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleText}>{open ? "Close" : "Menu"}</span>
          <span className={styles.toggleIcon} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className={styles.sheet} hidden={!open}>
        <nav aria-label="Mobile" className={`container ${styles.sheetInner}`}>
          <ul className={styles.sheetList}>
            {[{ label: "Home", href: "/" }, ...site.nav].map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <Link
                  href={item.href}
                  data-menu-link
                  className={styles.sheetLink}
                  aria-current={
                    (item.href === "/" ? pathname === "/" : isActive(item.href)) ? "page" : undefined
                  }
                  onClick={close}
                >
                  <span className={`label ${styles.sheetIndex}`}>{String(i).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.sheetFoot}>
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>
            <div className={`label muted ${styles.sheetLegal}`}>
              {site.legalNav.map((item) => (
                <Link key={item.href} href={item.href} onClick={close}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
